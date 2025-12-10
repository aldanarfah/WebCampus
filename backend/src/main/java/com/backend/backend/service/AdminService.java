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

    // --- FITUR LOGIN (BARU) ---
    public Admin login(String username, String password) {
        // 1. Cari admin berdasarkan username di database
        // Pastikan Anda sudah menambahkan findByUsername di AdminRepository!
        Optional<Admin> adminOptional = adminRepository.findByUsername(username);

        // 2. Jika username ditemukan, cek apakah passwordnya cocok
        if (adminOptional.isPresent()) {
            Admin admin = adminOptional.get();
            // Cek kesamaan password (ini untuk plain text, jika pakai hash gunakan passwordEncoder.matches)
            if (admin.getPassword().equals(password)) {
                return admin; // Password benar, kembalikan data admin
            }
        }
        
        // 3. Jika username tidak ada ATAU password salah
        return null; 
    }
    // --------------------------

    // CREATE

    public Admin createAdmin(Admin admin) {
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
    
    // UPDATE
    public Admin updateAdmin(Long id, Admin adminDetails) {
        return adminRepository.findById(id)
            .map(existingAdmin -> {
                existingAdmin.setNamaAdmin(adminDetails.getNamaAdmin());
                existingAdmin.setUsername(adminDetails.getUsername());
                existingAdmin.setEmail(adminDetails.getEmail());
                return adminRepository.save(existingAdmin);
            }).orElse(null);
    }
    
    // DELETE
    public void deleteAdmin(Long id) {
        // Proteksi: ID 1 tidak boleh dihapus
        if (id == 1L) {
            throw new RuntimeException("TIDAK BOLEH MENGHAPUS SUPER ADMIN!");
        }
        adminRepository.deleteById(id);
    }
}