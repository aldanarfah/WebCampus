package com.backend.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_event")
    private Long idEvent;

    @ManyToOne
    @JoinColumn(name = "id_organisasi")
    private Organisasi organisasi;

    @ManyToOne
    @JoinColumn(name = "id_ukm")
    private Ukm ukm;

    @Column(name = "nama_event", nullable = false, length = 150)
    private String namaEvent;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String deskripsi;

    @Column(name = "tanggal_mulai", nullable = false)
    private LocalDate tanggalMulai;

    @Column(name = "tanggal_selesai")
    private LocalDate tanggalSelesai;

    @Column(length = 150)
    private String lokasi;

    @Column(name = "gambar_event", length = 255)
    private String gambarEvent;

    @ManyToOne
    @JoinColumn(name = "dibuat_oleh", nullable = false)
    private Admin dibuatOleh;

    @Column(name = "dihapus_pada")
    private LocalDateTime dihapusPada;

    // --- LOGIKA STATUS OTOMATIS (Transient = Tidak disimpan di DB) ---
    // Spring Boot akan menghitung ini setiap kali data diambil
    @Transient
    public String getStatus() {
        LocalDate today = LocalDate.now();

        if (this.tanggalMulai == null) return "Unknown";

        if (today.isBefore(this.tanggalMulai)) {
            return "akan datang";
        } else if (this.tanggalSelesai != null && today.isAfter(this.tanggalSelesai)) {
            return "selesai";
        } else {
            return "berlangsung";
        }
    }

    // --- Constructor ---
    public Event() {}

    // --- Getters dan Setters ---
    public Long getIdEvent() { return idEvent; }
    public void setIdEvent(Long idEvent) { this.idEvent = idEvent; }

    public Organisasi getOrganisasi() { return organisasi; }
    public void setOrganisasi(Organisasi organisasi) { this.organisasi = organisasi; }

    public Ukm getUkm() { return ukm; }
    public void setUkm(Ukm ukm) { this.ukm = ukm; }

    public String getNamaEvent() { return namaEvent; }
    public void setNamaEvent(String namaEvent) { this.namaEvent = namaEvent; }

    public String getDeskripsi() { return deskripsi; }
    public void setDeskripsi(String deskripsi) { this.deskripsi = deskripsi; }

    public LocalDate getTanggalMulai() { return tanggalMulai; }
    public void setTanggalMulai(LocalDate tanggalMulai) { this.tanggalMulai = tanggalMulai; }

    public LocalDate getTanggalSelesai() { return tanggalSelesai; }
    public void setTanggalSelesai(LocalDate tanggalSelesai) { this.tanggalSelesai = tanggalSelesai; }

    public String getLokasi() { return lokasi; }
    public void setLokasi(String lokasi) { this.lokasi = lokasi; }

    public String getGambarEvent() { return gambarEvent; }
    public void setGambarEvent(String gambarEvent) { this.gambarEvent = gambarEvent; }

    public Admin getDibuatOleh() { return dibuatOleh; }
    public void setDibuatOleh(Admin dibuatOleh) { this.dibuatOleh = dibuatOleh; }

    public LocalDateTime getDihapusPada() { return dihapusPada; }
    public void setDihapusPada(LocalDateTime dihapusPada) { this.dihapusPada = dihapusPada; }
    
    // Setter 'status' DIHAPUS karena otomatis dihitung
}