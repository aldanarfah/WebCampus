package com.backend.backend.controller;

import com.backend.backend.model.Ormawa;
import com.backend.backend.service.OrmawaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/organisasi") // Semua endpoint akan diawali dengan /api/organisasi
public class OrmawaController {

    @Autowired
    private OrmawaService organisasiService;

    // C. CREATE (POST)
    // URL: POST  
    @PostMapping
    public ResponseEntity<Ormawa> createOrganisasi(@RequestBody Ormawa organisasi) {
        Ormawa createdOrg = organisasiService.createOrganisasi(organisasi);
        return new ResponseEntity<>(createdOrg, HttpStatus.CREATED); // Mengirimkan status 201 Created
    }

    // A. READ ALL (GET)
    // URL: GET http://localhost:8080/api/organisasi
    @GetMapping
    public List<Ormawa> getAllOrganisasi() {
        return organisasiService.findAllOrganisasi();
    }

    // B. READ BY ID (GET)
    // URL: GET http://localhost:8080/api/organisasi/1
    @GetMapping("/{id}")
    public ResponseEntity<Ormawa> getOrganisasiById(@PathVariable Long id) {
        Optional<Ormawa> organisasi = organisasiService.findOrganisasiById(id);
        
        if (organisasi.isPresent()) {
            return ResponseEntity.ok(organisasi.get()); // Mengirimkan status 200 OK
        } else {
            return ResponseEntity.notFound().build(); // Mengirimkan status 404 Not Found
        }
    }

    // D. UPDATE (PUT)
    // URL: PUT http://localhost:8080/api/organisasi/1
    @PutMapping("/{id}")
    public ResponseEntity<Ormawa> updateOrganisasi(@PathVariable Long id, @RequestBody Ormawa organisasiDetails) {
        Ormawa updatedOrg = organisasiService.updateOrganisasi(id, organisasiDetails);
        
        if (updatedOrg != null) {
            return ResponseEntity.ok(updatedOrg); // Mengirimkan status 200 OK
        } else {
            return ResponseEntity.notFound().build(); // Mengirimkan status 404 Not Found
        }
    }

    // E. DELETE (DELETE)
    // URL: DELETE http://localhost:8080/api/organisasi/1
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteOrganisasi(@PathVariable Long id) {
        boolean isDeleted = organisasiService.deleteOrganisasi(id);
        
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Mengirimkan status 204 No Content (Sukses hapus)
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Mengirimkan status 404 Not Found
        }
    }
}