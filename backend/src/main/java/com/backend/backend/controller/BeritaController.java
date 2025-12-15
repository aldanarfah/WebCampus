package com.backend.backend.controller;

import com.backend.backend.model.Berita;
import com.backend.backend.repository.BeritaRepository;
import com.backend.backend.service.BeritaService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/berita")
public class BeritaController {

    private final BeritaService beritaService;
    private final BeritaRepository beritaRepository;

    public BeritaController(BeritaService beritaService, BeritaRepository beritaRepository) {
        this.beritaService = beritaService;
        this.beritaRepository = beritaRepository;
    }

    @GetMapping
    public List<Berita> getAllBerita() {
        return beritaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Berita> getBeritaById(@PathVariable Long id) {
        return beritaService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // --- PERBAIKAN NAMA METHOD DISINI ---
    @GetMapping("/organisasi/{id}")
    public ResponseEntity<List<Berita>> getBeritaByOrganisasi(@PathVariable Long id) {
        // PERBAIKAN: Gunakan Berita.Status.publik (Bukan string "publik")
        // Jika merah/error, coba ganti jadi: Berita.Status.PUBLIK
        List<Berita> list = beritaRepository.findByOrganisasi_IdOrganisasiAndStatusAndDihapusPadaIsNullOrderByTanggalPublikasiDesc(id, Berita.Status.publik);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/ukm/{id}")
    public ResponseEntity<List<Berita>> getBeritaByUkm(@PathVariable Long id) {
        List<Berita> list = beritaRepository.findByUkm_IdUkmAndStatusAndDihapusPadaIsNullOrderByTanggalPublikasiDesc(id, Berita.Status.publik);
        return ResponseEntity.ok(list);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Berita> createBerita(
            @RequestPart("berita") String beritaJson,
            @RequestPart(value = "fileGambar", required = false) MultipartFile fileGambar
    ) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            Berita berita = mapper.readValue(beritaJson, Berita.class);

            if (berita.getDibuatOleh() == null) {
                berita.setDibuatOleh(1L); 
            }

            Berita created = beritaService.create(berita, fileGambar);
            return new ResponseEntity<>(created, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Berita> updateBerita(
            @PathVariable Long id,
            @RequestPart("berita") String beritaJson,
            @RequestPart(value = "fileGambar", required = false) MultipartFile fileGambar
    ) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            Berita details = mapper.readValue(beritaJson, Berita.class);
            Berita updated = beritaService.update(id, details, fileGambar);

            if (updated != null) return ResponseEntity.ok(updated);
            else return ResponseEntity.notFound().build();
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteBerita(@PathVariable Long id) {
        if (beritaService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}