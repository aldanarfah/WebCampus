package com.backend.backend.controller;

import com.backend.backend.model.Organisasi;
import com.backend.backend.service.OrganisasiService;
import com.fasterxml.jackson.databind.DeserializationFeature; // Import Penting
import com.fasterxml.jackson.databind.ObjectMapper; // Import Jackson
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule; // Import untuk handle Tanggal
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/organisasi")
public class OrganisasiController {

    private final OrganisasiService organisasiService;

    public OrganisasiController(OrganisasiService organisasiService) {
        this.organisasiService = organisasiService;
    }

    // CREATE (POST) dengan Upload File
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Organisasi> createOrganisasi(
            @RequestPart("organisasi") String organisasiJson, // Data teks dikirim sebagai JSON String
            @RequestPart(value = "fileLogo", required = false) MultipartFile fileLogo,
            @RequestPart(value = "fileStruktur", required = false) MultipartFile fileStruktur
    ) {
        try {
            // Ubah String JSON menjadi Object Organisasi Java
            ObjectMapper objectMapper = new ObjectMapper();
            
            // KONFIGURASI PENTING (Agar tidak error saat baca tanggal atau field asing)
            objectMapper.registerModule(new JavaTimeModule());
            objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            Organisasi organisasi = objectMapper.readValue(organisasiJson, Organisasi.class);

            Organisasi createdOrg = organisasiService.createOrganisasi(organisasi, fileLogo, fileStruktur);
            return new ResponseEntity<>(createdOrg, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Cek log error di terminal jika gagal
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // READ ALL
    @GetMapping
    public List<Organisasi> getAllOrganisasi() {
        return organisasiService.findAllOrganisasi();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Organisasi> getOrganisasiById(@PathVariable Long id) {
        Optional<Organisasi> organisasi = organisasiService.findOrganisasiById(id);
        return organisasi.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // UPDATE (PUT) dengan Upload File
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Organisasi> updateOrganisasi(
            @PathVariable Long id,
            @RequestPart("organisasi") String organisasiJson,
            @RequestPart(value = "fileLogo", required = false) MultipartFile fileLogo,
            @RequestPart(value = "fileStruktur", required = false) MultipartFile fileStruktur
    ) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            
            // KONFIGURASI PENTING (Agar tidak error 500 saat edit)
            objectMapper.registerModule(new JavaTimeModule());
            objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            Organisasi organisasiDetails = objectMapper.readValue(organisasiJson, Organisasi.class);

            Organisasi updatedOrg = organisasiService.updateOrganisasi(id, organisasiDetails, fileLogo, fileStruktur);
            
            if (updatedOrg != null) {
                return ResponseEntity.ok(updatedOrg);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            e.printStackTrace(); // Cek log error di terminal jika gagal
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteOrganisasi(@PathVariable Long id) {
        boolean isDeleted = organisasiService.deleteOrganisasi(id);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}