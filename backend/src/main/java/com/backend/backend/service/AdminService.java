package com.backend.backend.service;

import com.backend.backend.model.Admin;
import com.backend.backend.repository.AdminRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;       // <--- Import Waktu
import java.time.temporal.ChronoUnit; // <--- Import Hitung Selisih Waktu
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    
    private final AdminRepository adminRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // --- KONFIGURASI KEAMANAN ---
    private static final int MAX_FAILED_ATTEMPTS = 3;  // Batas Salah 3x
    private static final long LOCK_TIME_IN_MINUTES = 1; // Hukuman 1 Menit

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // --- FITUR LOGIN (UPDATE: Rate Limiting / Kunci Akun) ---
    public Admin login(String username, String rawPassword) {
        // 1. Cari admin berdasarkan username
        Admin admin = adminRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Username tidak ditemukan!"));

        // 2. CEK STATUS KUNCI (LOCK)
        if (admin.getLockedUntil() != null) {
            if (admin.getLockedUntil().isAfter(LocalDateTime.now())) {
                // Masih terkunci, hitung sisa waktu dalam detik
                long secondsLeft = ChronoUnit.SECONDS.between(LocalDateTime.now(), admin.getLockedUntil());
                throw new RuntimeException("Akun terkunci! Coba lagi dalam " + secondsLeft + " detik.");
            } else {
                // Waktu hukuman sudah habis, buka kunci otomatis
                admin.setLockedUntil(null);
                admin.setFailedAttempts(0);
                adminRepository.save(admin);
            }
        }

        // 3. CEK PASSWORD
        if (!passwordEncoder.matches(rawPassword, admin.getPassword())) {
            // --- JIKA PASSWORD SALAH ---
            
            // Tambah counter gagal
            int attempts = admin.getFailedAttempts() + 1;
            admin.setFailedAttempts(attempts);

            // Cek apakah sudah mencapai batas maksimal (3x)?
            if (attempts >= MAX_FAILED_ATTEMPTS) {
                // KUNCI AKUN!
                admin.setLockedUntil(LocalDateTime.now().plusMinutes(LOCK_TIME_IN_MINUTES));
                adminRepository.save(admin);
                throw new RuntimeException("Password salah 3x! Akun dikunci selama " + LOCK_TIME_IN_MINUTES + " menit.");
            }

            // Simpan counter kesalahan
            adminRepository.save(admin);
            
            // Beri pesan sisa kesempatan
            int sisa = MAX_FAILED_ATTEMPTS - attempts;
            throw new RuntimeException("Password salah! Sisa percobaan: " + sisa);
        }

        // 4. JIKA LOGIN SUKSES
        // Reset semua counter agar bersih kembali
        admin.setFailedAttempts(0);
        admin.setLockedUntil(null);
        adminRepository.save(admin);

        return admin; // Login sukses
    }

    // --- CREATE ADMIN ---
    public Admin createAdmin(Admin admin) {
        String rawPassword = admin.getPassword();
        String hashedPassword = passwordEncoder.encode(rawPassword);
        admin.setPassword(hashedPassword);
        return adminRepository.save(admin);
    }
    
    // --- COUNT ---
    public long count() {
        return adminRepository.count();
    }

    // --- READ ALL ---
    public List<Admin> findAllAdmin() {
        return adminRepository.findAll();
    }
    
    // --- READ BY ID ---
    public Optional<Admin> findAdminById(Long id) {
        return adminRepository.findById(id);
    }
    
    // --- UPDATE ---
    public Admin updateAdmin(Long id, Admin adminDetails) {
        return adminRepository.findById(id)
            .map(existingAdmin -> {
                existingAdmin.setNamaAdmin(adminDetails.getNamaAdmin());
                existingAdmin.setUsername(adminDetails.getUsername());
                existingAdmin.setEmail(adminDetails.getEmail());
                return adminRepository.save(existingAdmin);
            }).orElse(null);
    }
    
    // --- DELETE ---
    public void deleteAdmin(Long id) {
        Optional<Admin> targetAdmin = adminRepository.findById(id);
        
        if (targetAdmin.isPresent()) {
            Admin admin = targetAdmin.get();
            if (admin.getUsername().equals("adminpolinema")) {
                throw new RuntimeException("DILARANG MENGHAPUS SUPER ADMIN!");
            }
            adminRepository.deleteById(id);
        } else {
            throw new RuntimeException("Admin tidak ditemukan!");
        }
    }
}