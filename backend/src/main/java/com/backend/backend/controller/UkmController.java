package com.backend.backend.controller;

import com.backend.backend.model.Ukm;
import com.backend.backend.service.UkmService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ukm")
public class UkmController {

    private final UkmService ukmService;

    public UkmController(UkmService ukmService) {
        this.ukmService = ukmService;
    }

    // CREATE
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Ukm> createUkm(
            @RequestPart("ukm") String ukmJson,
            @RequestPart(value = "fileLogo", required = false) MultipartFile fileLogo,
            @RequestPart(value = "fileStruktur", required = false) MultipartFile fileStruktur
    ) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            Ukm ukm = mapper.readValue(ukmJson, Ukm.class);
            Ukm created = ukmService.createUkm(ukm, fileLogo, fileStruktur);
            return new ResponseEntity<>(created, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // READ ALL
    @GetMapping
    public List<Ukm> getAllUkm() {
        return ukmService.findAllUkm();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Ukm> getUkmById(@PathVariable Long id) {
        Optional<Ukm> ukm = ukmService.findUkmById(id);
        return ukm.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // UPDATE
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Ukm> updateUkm(
            @PathVariable Long id,
            @RequestPart("ukm") String ukmJson,
            @RequestPart(value = "fileLogo", required = false) MultipartFile fileLogo,
            @RequestPart(value = "fileStruktur", required = false) MultipartFile fileStruktur
    ) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            Ukm ukmDetails = mapper.readValue(ukmJson, Ukm.class);
            Ukm updated = ukmService.updateUkm(id, ukmDetails, fileLogo, fileStruktur);
            
            if (updated != null) return ResponseEntity.ok(updated);
            else return ResponseEntity.notFound().build();
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUkm(@PathVariable Long id) {
        boolean deleted = ukmService.deleteUkm(id);
        if (deleted) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}