package com.backend.backend.controller;

import com.backend.backend.model.Berita;
import com.backend.backend.service.BeritaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/berita")
public class BeritaController {
    
    private final BeritaService beritaService;

    public BeritaController(BeritaService beritaService) {
        this.beritaService = beritaService;
    }

    // GET ALL
    @GetMapping
    public List<Berita> getAllBerita() {
        return beritaService.findAllBerita();
    }
    
    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Berita> getBeritaById(@PathVariable Long id) {
        return beritaService.findBeritaById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // POST (CREATE)
    @PostMapping
    public ResponseEntity<Berita> createBerita(@RequestBody Berita berita) {
        Berita createdBerita = beritaService.createBerita(berita);
        return new ResponseEntity<>(createdBerita, HttpStatus.CREATED);
    }

    // PUT (UPDATE)
    @PutMapping("/{id}")
    public ResponseEntity<Berita> updateBerita(@PathVariable Long id, @RequestBody Berita beritaDetails) {
        Berita updatedBerita = beritaService.updateBerita(id, beritaDetails);
        return updatedBerita != null ? 
               ResponseEntity.ok(updatedBerita) : 
               ResponseEntity.notFound().build();
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBerita(@PathVariable Long id) {
        beritaService.deleteBerita(id);
        return ResponseEntity.noContent().build();
    }
}