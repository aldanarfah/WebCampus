package com.backend.backend.controller;

import com.backend.backend.model.Ukm;
import com.backend.backend.service.UkmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ukm") // URL: /api/ukm
public class UkmController {

    @Autowired
    private UkmService ukmService;

    // CREATE (POST)
    @PostMapping
    public ResponseEntity<Ukm> createUkm(@RequestBody Ukm ukm) {
        Ukm createdUkm = ukmService.createUkm(ukm);
        return new ResponseEntity<>(createdUkm, HttpStatus.CREATED);
    }

    // READ ALL (GET)
    @GetMapping
    public List<Ukm> getAllUkm() {
        return ukmService.findAllUkm();
    }

    // READ BY ID (GET)
    @GetMapping("/{id}")
    public ResponseEntity<Ukm> getUkmById(@PathVariable Long id) {
        Optional<Ukm> ukm = ukmService.findUkmById(id);
        return ukm.map(ResponseEntity::ok)
                  .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // UPDATE (PUT)
    @PutMapping("/{id}")
    public ResponseEntity<Ukm> updateUkm(@PathVariable Long id, @RequestBody Ukm ukmDetails) {
        Ukm updatedUkm = ukmService.updateUkm(id, ukmDetails);
        return updatedUkm != null ? 
               ResponseEntity.ok(updatedUkm) : 
               ResponseEntity.notFound().build();
    }

    // DELETE (DELETE)
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUkm(@PathVariable Long id) {
        boolean isDeleted = ukmService.deleteUkm(id);
        return isDeleted ? 
               new ResponseEntity<>(HttpStatus.NO_CONTENT) : 
               new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}