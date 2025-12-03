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

    @ManyToOne 
    @JoinColumn(name = "id_organisasi")
    private Organisasi organisasi; 

    @ManyToOne 
    @JoinColumn(name = "id_ukm")
    private Ukm ukm;

    @Column(nullable = false, length = 150)
    private String judul;

    @Lob 
    @Column(nullable = false, columnDefinition = "TEXT")
    private String isi;

    @Column(name = "gambar_berita", length = 255)
    private String gambarBerita;
    
    @Column(name = "tanggal_publikasi", insertable = false, updatable = false)
    private LocalDateTime tanggalPublikasi;

    @ManyToOne 
    @JoinColumn(name = "dibuat_oleh", nullable = false)
    private Admin dibuatOleh;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "enum('publik','draft')")
    private Status status;
    
    @Column(name = "dihapus_pada")
    private LocalDateTime dihapusPada;

    // --- Constructor ---
    public Berita() {}

    // --- Getters dan Setters ---
    public Long getIdBerita() { return idBerita; }
    public void setIdBerita(Long idBerita) { this.idBerita = idBerita; }
    public Organisasi getOrganisasi() { return organisasi; }
    public void setOrganisasi(Organisasi organisasi) { this.organisasi = organisasi; }
    public Ukm getUkm() { return ukm; }
    public void setUkm(Ukm ukm) { this.ukm = ukm; }
    public String getJudul() { return judul; }
    public void setJudul(String judul) { this.judul = judul; }
    public String getIsi() { return isi; }
    public void setIsi(String isi) { this.isi = isi; }
    public String getGambarBerita() { return gambarBerita; }
    public void setGambarBerita(String gambarBerita) { this.gambarBerita = gambarBerita; }
    public LocalDateTime getTanggalPublikasi() { return tanggalPublikasi; }
    public Admin getDibuatOleh() { return dibuatOleh; }
    public void setDibuatOleh(Admin dibuatOleh) { this.dibuatOleh = dibuatOleh; }
    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }
    public LocalDateTime getDihapusPada() { return dihapusPada; }
    public void setDihapusPada(LocalDateTime dihapusPada) { this.dihapusPada = dihapusPada; }
}