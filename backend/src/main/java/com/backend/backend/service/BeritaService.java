package com.backend.backend.service;

import com.backend.backend.model.Berita;
import com.backend.backend.repository.BeritaRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BeritaService {

    private final BeritaRepository beritaRepository;
    private final Path fileStorageLocation;

    public BeritaService(BeritaRepository beritaRepository, @Value("${file.upload-dir}") String uploadDir) {
        this.beritaRepository = beritaRepository;
        this.fileStorageLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
        
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Gagal membuat folder upload", ex);
        }
    }

    // --- Helper Upload ---
    private String simpanFile(MultipartFile file) {
        if (file == null || file.isEmpty()) return null;
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;
            Path targetLocation = this.fileStorageLocation.resolve(uniqueFileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return uniqueFileName;
        } catch (IOException ex) {
            throw new RuntimeException("Gagal simpan file " + fileName, ex);
        }
    }

    // --- CRUD ---

    public List<Berita> findAll() {
        return beritaRepository.findByDihapusPadaIsNullOrderByTanggalPublikasiDesc();
    }

    public Optional<Berita> findById(Long id) {
        return beritaRepository.findById(id);
    }

    public Berita create(Berita berita, MultipartFile fileGambar) {
        if (fileGambar != null) {
            berita.setGambarBerita(simpanFile(fileGambar));
        }
        // Pastikan tanggal ada
        if (berita.getTanggalPublikasi() == null) {
            berita.setTanggalPublikasi(LocalDateTime.now());
        }
        return beritaRepository.save(berita);
    }

    public Berita update(Long id, Berita details, MultipartFile fileGambar) {
        Optional<Berita> optionalBerita = beritaRepository.findById(id);
        if (optionalBerita.isPresent()) {
            Berita existing = optionalBerita.get();
            
            existing.setJudul(details.getJudul());
            existing.setIsi(details.getIsi());
            existing.setStatus(details.getStatus());
            
            // Update Relasi (Jika dikirim dari frontend)
            existing.setOrganisasi(details.getOrganisasi());
            existing.setUkm(details.getUkm());

            // Update Gambar jika ada yang baru
            if (fileGambar != null && !fileGambar.isEmpty()) {
                existing.setGambarBerita(simpanFile(fileGambar));
            }

            return beritaRepository.save(existing);
        }
        return null;
    }

    public boolean delete(Long id) {
        Optional<Berita> berita = beritaRepository.findById(id);
        if (berita.isPresent()) {
            Berita existing = berita.get();
            existing.setDihapusPada(LocalDateTime.now());
            beritaRepository.save(existing);
            return true;
        }
        return false;
    }
}