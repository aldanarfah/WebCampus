package com.backend.backend.service;

import com.backend.backend.model.Organisasi;
import com.backend.backend.repository.OrganisasiRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
import org.springframework.beans.factory.annotation.Value;

@Service
public class OrganisasiService {
    
    // Inject Repository untuk akses database
    private final OrganisasiRepository organisasiRepository;
    private final Path fileStorageLocation;

    public OrganisasiService(OrganisasiRepository organisasiRepository, @Value("${file.upload-dir}") String uploadDir) {
        this.organisasiRepository = organisasiRepository;
        
        // Setup lokasi folder
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

        // Bersihkan nama file
        String fileName = org.springframework.util.StringUtils.cleanPath(file.getOriginalFilename());
        
        try {
            // Tambahkan UUID agar nama file unik (mencegah bentrok nama)
            String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;
            
            // Simpan file ke folder target
            Path targetLocation = this.fileStorageLocation.resolve(uniqueFileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            
            return uniqueFileName; // Kembalikan nama file untuk disimpan di DB
        } catch (IOException ex) {
            throw new RuntimeException("Gagal menyimpan file " + fileName, ex);
        }
    }

    // --- CRUD METHODS ---
    public List<Organisasi> findAllOrganisasi() {
        // Filter out entities with a non-null dihapusPada without requiring a custom repository method
        return organisasiRepository.findAll().stream()
                .filter(org -> org.getDihapusPada() == null)
                .collect(Collectors.toList());
    }
    

    public Optional<Organisasi> findOrganisasiById(Long id) {
        return organisasiRepository.findById(id);
    }

    // UPDATE: Create dengan File Upload
    public Organisasi createOrganisasi(Organisasi organisasi, MultipartFile fileLogo, MultipartFile fileStruktur) {
        // Simpan file jika ada
        if (fileLogo != null) organisasi.setGambarLogo(simpanFile(fileLogo));
        if (fileStruktur != null) organisasi.setStrukturOrganisasi(simpanFile(fileStruktur));
        
        return organisasiRepository.save(organisasi);
    }

    // UPDATE: Edit dengan File Upload
    public Organisasi updateOrganisasi(Long id, Organisasi details, MultipartFile fileLogo, MultipartFile fileStruktur) {
        Optional<Organisasi> optionalOrg = organisasiRepository.findById(id);
        
        if (optionalOrg.isPresent()) {
            Organisasi existing = optionalOrg.get();
            
            // Update Data Text
            existing.setNamaOrganisasi(details.getNamaOrganisasi());
            existing.setDeskripsi(details.getDeskripsi());
            existing.setKetua(details.getKetua());
            existing.setPeriode(details.getPeriode());
            existing.setStatus(details.getStatus());
            existing.setPenanggungJawab(details.getPenanggungJawab());
            existing.setNamaProdi(details.getNamaProdi());
            existing.setContactPerson(details.getContactPerson());

            // Update File HANYA JIKA ada file baru diupload
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