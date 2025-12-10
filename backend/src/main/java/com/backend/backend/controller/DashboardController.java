package com.backend.backend.controller;

import com.backend.backend.dto.DashboardStats;
import com.backend.backend.model.Organisasi; // Import Model Organisasi
import com.backend.backend.model.Ukm;        // Import Model UKM
import com.backend.backend.repository.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class DashboardController {

    private final OrganisasiRepository organisasiRepo;
    private final UkmRepository ukmRepo;
    private final BeritaRepository beritaRepo;
    private final EventRepository eventRepo;

    public DashboardController(OrganisasiRepository o, UkmRepository u, BeritaRepository b, EventRepository e) {
        this.organisasiRepo = o;
        this.ukmRepo = u;
        this.beritaRepo = b;
        this.eventRepo = e;
    }

    @GetMapping("/stats")
    public ResponseEntity<DashboardStats> getDashboardStats() {
        
        // --- 1. ORGANISASI (Pakai Enum) ---
        // Gunakan Organisasi.Status.aktif (sesuaikan huruf besar/kecil dgn file Model Anda)
        long orgAktifMurni = organisasiRepo.countByStatusAndDihapusPadaIsNull(Organisasi.Status.aktif);
        long orgNonaktif = organisasiRepo.countByStatusAndDihapusPadaIsNull(Organisasi.Status.nonaktif);
        long orgTerhapus = organisasiRepo.countByDihapusPadaIsNotNull();
        long orgSampah = orgNonaktif + orgTerhapus;

        // --- 2. UKM (Pakai Enum) ---
        long ukmAktifMurni = ukmRepo.countByStatusAndDihapusPadaIsNull(Ukm.Status.aktif);
        long ukmNonaktif = ukmRepo.countByStatusAndDihapusPadaIsNull(Ukm.Status.nonaktif);
        long ukmTerhapus = ukmRepo.countByDihapusPadaIsNotNull();
        long ukmSampah = ukmNonaktif + ukmTerhapus;

        // --- 3. BERITA & EVENT (Tetap) ---
        long eventAktif = eventRepo.countByDihapusPadaIsNull();
        long eventHapus = eventRepo.countByDihapusPadaIsNotNull();

        long beritaAktif = beritaRepo.countByDihapusPadaIsNull();
        long beritaHapus = beritaRepo.countByDihapusPadaIsNotNull();

        // Masukkan ke DTO
        DashboardStats stats = new DashboardStats(
                orgAktifMurni, orgSampah,
                ukmAktifMurni, ukmSampah,
                eventAktif, eventHapus,
                beritaAktif, beritaHapus
        );

        return ResponseEntity.ok(stats);
    }
}