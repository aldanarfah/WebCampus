package com.backend.backend.service;

import com.backend.backend.model.Organisasi;
import com.backend.backend.repository.OrganisasiRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils; // Import StringUtils yang benar
import org.springframework.beans.factory.annotation.Value;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrganisasiService {
    
    private final OrganisasiRepository organisasiRepository;
    private final Path fileStorageLocation;

    public OrganisasiService(OrganisasiRepository organisasiRepository, @Value("${file.upload-dir}") String uploadDir) {
        this.organisasiRepository = organisasiRepository;
        
        this.fileStorageLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Tidak bisa membuat folder upload!", ex);
        }
    }

    // --- HELPER: Fungsi Simpan File ---
    public String simpanFile(MultipartFile file) {
        if (file == null || file.isEmpty()) return null;

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        
        try {
            String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;
            Path targetLocation = this.fileStorageLocation.resolve(uniqueFileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return uniqueFileName;
        } catch (IOException ex) {
            throw new RuntimeException("Gagal menyimpan file " + fileName, ex);
        }
    }

    // --- READ METHODS (PENTING: DIPISAH PUBLIC & ADMIN) ---

    // 1. KHUSUS PUBLIC (Frontend Pengunjung)
    // Syarat: Belum dihapus DAN Status harus 'aktif'
    public List<Organisasi> findAllOrganisasiPublic() {
        return organisasiRepository.findAll().stream()
                .filter(org -> org.getDihapusPada() == null)
                // Filter Status Aktif (Pastikan status di Model menggunakan Enum/String yang sesuai)
                .filter(org -> org.getStatus() == Organisasi.Status.aktif) 
                .collect(Collectors.toList());
    }

    // 2. KHUSUS ADMIN (Dashboard)
    // Syarat: Belum dihapus (Status 'nonaktif' tetap muncul agar bisa diedit)
    public List<Organisasi> findAllOrganisasiAdmin() {
        return organisasiRepository.findAll().stream()
                .filter(org -> org.getDihapusPada() == null)
                .collect(Collectors.toList());
    }
    
    // Mencari by ID (Umum)
    public Optional<Organisasi> findOrganisasiById(Long id) {
        return organisasiRepository.findById(id);
    }

    // --- WRITE METHODS (CREATE, UPDATE, DELETE) ---

    public Organisasi createOrganisasi(Organisasi organisasi, MultipartFile fileLogo, MultipartFile fileStruktur) {
        if (fileLogo != null) organisasi.setGambarLogo(simpanFile(fileLogo));
        if (fileStruktur != null) organisasi.setStrukturOrganisasi(simpanFile(fileStruktur));
        
        // Default status jika null
        if (organisasi.getStatus() == null) {
            organisasi.setStatus(Organisasi.Status.aktif);
        }

        return organisasiRepository.save(organisasi);
    }

    public Organisasi updateOrganisasi(Long id, Organisasi details, MultipartFile fileLogo, MultipartFile fileStruktur) {
        Optional<Organisasi> optionalOrg = organisasiRepository.findById(id);
        
        if (optionalOrg.isPresent()) {
            Organisasi existing = optionalOrg.get();
            
            existing.setNamaOrganisasi(details.getNamaOrganisasi());
            existing.setDeskripsi(details.getDeskripsi());
            existing.setKetua(details.getKetua());
            existing.setPeriode(details.getPeriode());
            existing.setStatus(details.getStatus()); // Admin bisa ubah status disini
            existing.setPenanggungJawab(details.getPenanggungJawab());
            existing.setNamaProdi(details.getNamaProdi());
            existing.setContactPerson(details.getContactPerson());

            if (fileLogo != null && !fileLogo.isEmpty()) {
                existing.setGambarLogo(simpanFile(fileLogo));
            }
            if (fileStruktur != null && !fileStruktur.isEmpty()) {
                existing.setStrukturOrganisasi(simpanFile(fileStruktur));
            }
            
            return organisasiRepository.save(existing);
        }
        return null;
    }

    public boolean deleteOrganisasi(Long id) {
        Optional<Organisasi> org = organisasiRepository.findById(id);
        if (org.isPresent()) {
            Organisasi existingOrg = org.get();
            existingOrg.setDihapusPada(LocalDateTime.now());
            organisasiRepository.save(existingOrg);
            return true;
        }
        return false;
    }
}