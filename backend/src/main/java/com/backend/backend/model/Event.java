package com.backend.backend.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat; 
import java.time.LocalDateTime; 
import java.math.BigDecimal;

@Entity
@Table(name = "event")
public class Event {

    public enum Status {
        publik, draft
    }
    @Column(name = "harga")
    private BigDecimal harga;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_event")
    private Long idEvent;

    @Column(name = "nama_event", nullable = false)
    private String namaEvent;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String deskripsi;

    private String lokasi;

    @Column(name = "gambar_event")
    private String gambarEvent;

    @Column(name = "link_pendaftaran")
    private String linkPendaftaran;

    // ✨ VERSI BENAR: PAKAI DETIK (:ss) ✨
    // Agar cocok dengan data "2025-12-09T11:11:00" yang dikirim Angular
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") 
    @Column(name = "tanggal_mulai")
    private LocalDateTime tanggalMulai;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @Column(name = "tanggal_selesai")
    private LocalDateTime tanggalSelesai;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "enum('publik','draft')")
    private Status status;

    @Column(name = "dihapus_pada")
    private LocalDateTime dihapusPada;

    // --- RELASI PEMILIK ---
    @ManyToOne
    @JoinColumn(name = "id_organisasi", nullable = true)
    private Organisasi organisasi;

    @ManyToOne
    @JoinColumn(name = "id_ukm", nullable = true)
    private Ukm ukm;


    // --- RELASI ADMIN PEMBUAT ---
    @ManyToOne
    @JoinColumn(name = "dibuat_oleh", nullable = true)
    private Admin dibuatOleh;

    public Event() {}
    public Admin getDibuatOleh() { return dibuatOleh; }
    public void setDibuatOleh(Admin dibuatOleh) { this.dibuatOleh = dibuatOleh; }

    // --- GETTERS & SETTERS ---

    public Long getIdEvent() { return idEvent; }
    public void setIdEvent(Long idEvent) { this.idEvent = idEvent; }

    public BigDecimal getHarga() {
        return harga;
    }

    public void setHarga(BigDecimal harga) {
        this.harga = harga;
    }

    public String getNamaEvent() { return namaEvent; }
    public void setNamaEvent(String namaEvent) { this.namaEvent = namaEvent; }

    public String getDeskripsi() { return deskripsi; }
    public void setDeskripsi(String deskripsi) { this.deskripsi = deskripsi; }

    public String getLokasi() { return lokasi; }
    public void setLokasi(String lokasi) { this.lokasi = lokasi; }

    public String getGambarEvent() { return gambarEvent; }
    public void setGambarEvent(String gambarEvent) { this.gambarEvent = gambarEvent; }

    public String getLinkPendaftaran() { return linkPendaftaran; }
    public void setLinkPendaftaran(String linkPendaftaran) { this.linkPendaftaran = linkPendaftaran; }

    public LocalDateTime getTanggalMulai() { return tanggalMulai; }
    public void setTanggalMulai(LocalDateTime tanggalMulai) { this.tanggalMulai = tanggalMulai; }

    public LocalDateTime getTanggalSelesai() { return tanggalSelesai; }
    public void setTanggalSelesai(LocalDateTime tanggalSelesai) { this.tanggalSelesai = tanggalSelesai; }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }

    public LocalDateTime getDihapusPada() { return dihapusPada; }
    public void setDihapusPada(LocalDateTime dihapusPada) { this.dihapusPada = dihapusPada; }

    public Organisasi getOrganisasi() { return organisasi; }
    public void setOrganisasi(Organisasi organisasi) { this.organisasi = organisasi; }

    public Ukm getUkm() { return ukm; }
    public void setUkm(Ukm ukm) { this.ukm = ukm; }

    @Transient
    public String getStatusWaktu() {
        if (tanggalMulai == null || tanggalSelesai == null) return "Belum Dijadwalkan";
        LocalDateTime now = LocalDateTime.now();
        if (now.isBefore(tanggalMulai)) return "Akan Datang";
        else if (now.isAfter(tanggalSelesai)) return "Selesai";
        else return "Berlangsung";
    }
}