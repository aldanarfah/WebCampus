package com.backend.backend.service;

import com.backend.backend.model.Admin;
import com.backend.backend.repository.AdminRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    
    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // CREATE
    public Admin createAdmin(Admin admin) {
        // Catatan: Di sini adalah tempat Anda me-hash password sebelum menyimpan!
        // Contoh: admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        return adminRepository.save(admin);
    }

    // READ ALL
    public List<Admin> findAllAdmin() {
        return adminRepository.findAll();
    }
    
    // READ BY ID
    public Optional<Admin> findAdminById(Long id) {
        return adminRepository.findById(id);
    }
    
    // UPDATE (Logika Aman)
    public Admin updateAdmin(Long id, Admin adminDetails) {
        return adminRepository.findById(id)
            .map(existingAdmin -> {
                // Update kolom
                existingAdmin.setNamaAdmin(adminDetails.getNamaAdmin());
                existingAdmin.setUsername(adminDetails.getUsername());
                existingAdmin.setEmail(adminDetails.getEmail());
                
                // HINDARI update password di endpoint PUT ini; buat endpoint khusus jika perlu
                // Jika password dikirim di body, Anda harus me-hash-nya di sini
                
                return adminRepository.save(existingAdmin);
            }).orElse(null);
    }
    
    // DELETE
    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }
}