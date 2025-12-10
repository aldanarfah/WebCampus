package com.backend.backend.controller;

import com.backend.backend.model.Admin;
import com.backend.backend.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map; // Import wajib untuk menangkap JSON body saat login

@RestController
@RequestMapping("/api/admin")
// Izinkan Angular mengakses API ini
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class AdminController {
    
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    // --- ENDPOINT LOGIN (BARU) ---
    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        // Panggil service login
        Admin admin = adminService.login(username, password);

        if (admin != null) {
            // Login Berhasil: Kembalikan data admin
            return ResponseEntity.ok(admin);
        } else {
            // Login Gagal: Kembalikan status 401 Unauthorized
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Username atau Password salah!");
        }
    }
    // -----------------------------

    // GET ALL
    @GetMapping
    public List<Admin> getAllAdmin() {
        return adminService.findAllAdmin();
    }

    // POST (CREATE)
    @PostMapping
    public ResponseEntity<Admin> createAdmin(@RequestBody Admin admin) {
        Admin createdAdmin = adminService.createAdmin(admin);
        return new ResponseEntity<>(createdAdmin, HttpStatus.CREATED);
    }

    // PUT (UPDATE)
    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable Long id, @RequestBody Admin adminDetails) {
        Admin updatedAdmin = adminService.updateAdmin(id, adminDetails);
        return updatedAdmin != null ? 
               ResponseEntity.ok(updatedAdmin) : 
               ResponseEntity.notFound().build();
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.noContent().build();
    }
    
    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        return adminService.findAdminById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}