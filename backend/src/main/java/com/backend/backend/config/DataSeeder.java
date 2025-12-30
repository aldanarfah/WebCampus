package com.backend.backend.config;

import com.backend.backend.model.Admin;
import com.backend.backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private AdminService adminService;

    @Override
    public void run(String... args) throws Exception {
        // Cek apakah tabel admin kosong?
        if (adminService.count() == 0) {
            System.out.println("⚠️ Tabel Admin kosong. Membuat Admin Default...");

            Admin admin = new Admin();
            admin.setUsername("adminpolinema"); 
            admin.setPassword("admin123");      // Password akan di-hash di service
            
            // PERBAIKAN 1: Sesuaikan dengan nama field di Model Admin kamu
            // (Sebelumnya error karena tertulis setNamaLengkap)
            admin.setNamaAdmin("Super Administrator"); 
            
            admin.setEmail("admin@polinema.ac.id");

            // PERBAIKAN 2: Sesuaikan dengan nama method di AdminService
            // (Sebelumnya error karena tertulis register)
            adminService.createAdmin(admin);
            
            System.out.println("✅ Admin Default berhasil dibuat!");
            System.out.println("   Username: adminpolinema");
            System.out.println("   Password: admin123");
        }
    }
}