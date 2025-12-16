package com.backend.backend.controller;

import com.backend.backend.dto.DashboardStats;
import com.backend.backend.model.Organisasi;
import com.backend.backend.model.Ukm;
import com.backend.backend.repository.BeritaRepository;
import com.backend.backend.repository.EventRepository;
import com.backend.backend.repository.OrganisasiRepository;
import com.backend.backend.repository.UkmRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final OrganisasiRepository organisasiRepo;
    private final UkmRepository ukmRepo;
    private final BeritaRepository beritaRepo;
    private final EventRepository eventRepo;

    public DashboardController(OrganisasiRepository organisasiRepo, UkmRepository ukmRepo, 
                               BeritaRepository beritaRepo, EventRepository eventRepo) {
        this.organisasiRepo = organisasiRepo;
        this.ukmRepo = ukmRepo;
        this.beritaRepo = beritaRepo;
        this.eventRepo = eventRepo;
    }

    @GetMapping("/stats")
    public ResponseEntity<DashboardStats> getDashboardStats() {
        DashboardStats stats = new DashboardStats();

        // ==========================================
        // 1. ORGANISASI
        // ==========================================
        
        // A. Hitung yang Murni AKTIF (Tampil di Frontend)
        long orgAktif = organisasiRepo.countByStatusAndDihapusPadaIsNull(Organisasi.Status.aktif);
        
        // B. Hitung yang NONAKTIF (Disembunyikan tapi ada di DB)
        long orgNonaktif = organisasiRepo.countByStatusAndDihapusPadaIsNull(Organisasi.Status.nonaktif);
        
        // C. Hitung yang SOFT DELETE (Masuk Tong Sampah)
        long orgSoftDelete = organisasiRepo.countByDihapusPadaIsNotNull();

        // D. TOTAL YANG TIDAK TAMPIL (Nonaktif + Sampah)
        long totalOrgTersembunyi = orgNonaktif + orgSoftDelete;

        // Set ke DTO
        stats.setOrganisasiAktif(orgAktif);
        stats.setOrganisasiTerhapus(totalOrgTersembunyi); // FIX DISINI: Gunakan hasil penjumlahan


        // ==========================================
        // 2. UKM
        // ==========================================
        
        // A. Hitung Aktif
        long ukmAktif = ukmRepo.countByStatusAndDihapusPadaIsNull(Ukm.Status.aktif);
        
        // B. Hitung Nonaktif
        long ukmNonaktif = ukmRepo.countByStatusAndDihapusPadaIsNull(Ukm.Status.nonaktif);
        
        // C. Hitung Soft Delete
        long ukmSoftDelete = ukmRepo.countByDihapusPadaIsNotNull();

        // D. TOTAL YANG TIDAK TAMPIL
        long totalUkmTersembunyi = ukmNonaktif + ukmSoftDelete;

        // Set ke DTO
        stats.setUkmAktif(ukmAktif);
        stats.setUkmTerhapus(totalUkmTersembunyi); // FIX DISINI: Gunakan hasil penjumlahan


        // ==========================================
        // 3. EVENT (Hanya Soft Delete)
        // ==========================================
        long eventAda = eventRepo.countByDihapusPadaIsNull();
        long eventSampah = eventRepo.countByDihapusPadaIsNotNull();

        stats.setEventAktif(eventAda);
        stats.setEventTerhapus(eventSampah);


        // ==========================================
        // 4. BERITA (Hanya Soft Delete)
        // ==========================================
        long beritaAda = beritaRepo.countByDihapusPadaIsNull();
        long beritaSampah = beritaRepo.countByDihapusPadaIsNotNull();

        stats.setBeritaAktif(beritaAda);
        stats.setBeritaTerhapus(beritaSampah);

        return ResponseEntity.ok(stats);
    }
}