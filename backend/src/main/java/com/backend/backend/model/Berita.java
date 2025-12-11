package com.backend.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "berita")
public class Berita {

    public enum Status {
        publik, draft
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_berita")
    private Long idBerita;

    @Column(nullable = false)
    private String judul;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String isi;

    @Column(name = "gambar_berita")
    private String gambarBerita;

    @Column(name = "tanggal_publikasi")
    private LocalDateTime tanggalPublikasi;

    @Column(name = "dibuat_oleh") // Menyimpan ID user admin (opsional, biarkan dulu)
    private Long dibuatOleh;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "enum('publik','draft')")
    private Status status;

    @Column(name = "dihapus_pada")
    private LocalDateTime dihapusPada;

    // --- RELASI KE ORGANISASI & UKM (Opsional / Nullable) ---
    
    @ManyToOne
    @JoinColumn(name = "id_organisasi", nullable = true)
    private Organisasi organisasi;

    @ManyToOne
    @JoinColumn(name = "id_ukm", nullable = true)
    private Ukm ukm;

    // --- CONSTRUCTOR ---
    public Berita() {
        // Default tanggal publikasi saat dibuat
        this.tanggalPublikasi = LocalDateTime.now();
    }

    // --- GETTERS & SETTERS ---

    public Long getIdBerita() { return idBerita; }
    public void setIdBerita(Long idBerita) { this.idBerita = idBerita; }

    public String getJudul() { return judul; }
    public void setJudul(String judul) { this.judul = judul; }

    public String getIsi() { return isi; }
    public void setIsi(String isi) { this.isi = isi; }

    public String getGambarBerita() { return gambarBerita; }
    public void setGambarBerita(String gambarBerita) { this.gambarBerita = gambarBerita; }

    public LocalDateTime getTanggalPublikasi() { return tanggalPublikasi; }
    public void setTanggalPublikasi(LocalDateTime tanggalPublikasi) { this.tanggalPublikasi = tanggalPublikasi; }

    public Long getDibuatOleh() { return dibuatOleh; }
    public void setDibuatOleh(Long dibuatOleh) { this.dibuatOleh = dibuatOleh; }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }

    public LocalDateTime getDihapusPada() { return dihapusPada; }
    public void setDihapusPada(LocalDateTime dihapusPada) { this.dihapusPada = dihapusPada; }

    public Organisasi getOrganisasi() { return organisasi; }
    public void setOrganisasi(Organisasi organisasi) { this.organisasi = organisasi; }

    public Ukm getUkm() { return ukm; }
    public void setUkm(Ukm ukm) { this.ukm = ukm; }
}