package com.backend.backend.service;

import com.backend.backend.model.Ukm;
import com.backend.backend.repository.UkmRepository;
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
            throw new RuntimeException("Tidak bisa membuat folder upload!", ex);
        }
    }

    // Helper: Simpan File
    private String simpanFile(MultipartFile file) {
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
    // A. READ ALL
    public List<Ukm> findAllUkm() {
        return ukmRepository.findAll()
                .stream()
                .filter(u -> u.getDihapusPada() == null)
                .collect(Collectors.toList());
    }
    

    // B. READ ONE
    public Optional<Ukm> findUkmById(Long id) {
        return ukmRepository.findById(id);
    }

    // C. CREATE
    public Ukm createUkm(Ukm ukm, MultipartFile fileLogo, MultipartFile fileStruktur) {
        if (fileLogo != null) ukm.setGambarLogo(simpanFile(fileLogo));
        if (fileStruktur != null) ukm.setStrukturOrganisasi(simpanFile(fileStruktur));
        return ukmRepository.save(ukm);
    }

    // D. UPDATE
    public Ukm updateUkm(Long id, Ukm details, MultipartFile fileLogo, MultipartFile fileStruktur) {
        Optional<Ukm> optionalUkm = ukmRepository.findById(id);
        if (optionalUkm.isPresent()) {
            Ukm existing = optionalUkm.get();
            
            existing.setNamaUkm(details.getNamaUkm());
            existing.setDeskripsi(details.getDeskripsi());
            existing.setPenanggungJawab(details.getPenanggungJawab()); // Baru
            existing.setKetua(details.getKetua());
            existing.setPeriode(details.getPeriode());
            existing.setNamaProdi(details.getNamaProdi());
            existing.setContactPerson(details.getContactPerson());
            existing.setStatus(details.getStatus());

            // Update gambar hanya jika ada file baru
            if (fileLogo != null && !fileLogo.isEmpty()) {
                existing.setGambarLogo(simpanFile(fileLogo));
            }
            if (fileStruktur != null && !fileStruktur.isEmpty()) {
                existing.setStrukturOrganisasi(simpanFile(fileStruktur));
            }

            return ukmRepository.save(existing);
        }
        return null;
    }

    // E. DELETE (Soft Delete)
    public boolean deleteUkm(Long id) {
        Optional<Ukm> ukm = ukmRepository.findById(id);
        if (ukm.isPresent()) {
            Ukm existing = ukm.get();
            existing.setDihapusPada(LocalDateTime.now());
            ukmRepository.save(existing);
            return true;
        }
        return false;
    }
}