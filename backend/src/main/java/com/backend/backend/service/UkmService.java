package com.backend.backend.service;

import com.backend.backend.model.Ukm;
import com.backend.backend.repository.UkmRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UkmService {

    private final UkmRepository ukmRepository;
    private final Path fileStorageLocation;

    public UkmService(UkmRepository ukmRepository, @Value("${file.upload-dir}") String uploadDir) {
        this.ukmRepository = ukmRepository;
        this.fileStorageLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Gagal buat folder upload", ex);
        }
    }

    // --- HELPER UPLOAD ---
    public String simpanFile(MultipartFile file) {
        if (file == null || file.isEmpty()) return null;
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;
            Path targetLocation = this.fileStorageLocation.resolve(uniqueFileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return uniqueFileName;
        } catch (IOException ex) {
            throw new RuntimeException("Gagal simpan file", ex);
        }
    }

    // --- READ METHODS ---

    // 1. PUBLIC (Halaman Depan: Hanya Aktif)
    public List<Ukm> findAllUkmPublic() {
        return ukmRepository.findByStatusAndDihapusPadaIsNull(Ukm.Status.aktif);
    }

    // 2. ADMIN (Dashboard: Semua yang belum dihapus)
    public List<Ukm> findAllUkmAdmin() {
        return ukmRepository.findAll().stream()
                .filter(u -> u.getDihapusPada() == null)
                .collect(Collectors.toList());
    }

    public Optional<Ukm> findUkmById(Long id) {
        return ukmRepository.findById(id);
    }

    // --- WRITE METHODS ---

    public Ukm createUkm(Ukm ukm, MultipartFile fileLogo, MultipartFile fileStruktur) {
        if (fileLogo != null) ukm.setGambarLogo(simpanFile(fileLogo));
        if (fileStruktur != null) ukm.setStrukturOrganisasi(simpanFile(fileStruktur));
        
        if (ukm.getStatus() == null) ukm.setStatus(Ukm.Status.aktif);
        
        return ukmRepository.save(ukm);
    }

    public Ukm updateUkm(Long id, Ukm details, MultipartFile fileLogo, MultipartFile fileStruktur) {
        Optional<Ukm> opt = ukmRepository.findById(id);
        if (opt.isPresent()) {
            Ukm existing = opt.get();
            existing.setNamaUkm(details.getNamaUkm());
            existing.setDeskripsi(details.getDeskripsi());
            existing.setKetua(details.getKetua());
            existing.setPeriode(details.getPeriode());
            existing.setStatus(details.getStatus()); // Admin bisa ubah status
            // ... set field lain sesuai kebutuhan ...

            if (fileLogo != null) existing.setGambarLogo(simpanFile(fileLogo));
            if (fileStruktur != null) existing.setStrukturOrganisasi(simpanFile(fileStruktur));

            return ukmRepository.save(existing);
        }
        return null;
    }

    public boolean deleteUkm(Long id) {
        Optional<Ukm> opt = ukmRepository.findById(id);
        if (opt.isPresent()) {
            Ukm existing = opt.get();
            existing.setDihapusPada(LocalDateTime.now());
            ukmRepository.save(existing);
            return true;
        }
        return false;
    }
}