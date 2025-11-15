package com.backend.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import static com.backend.backend.model.Ormawa.Status; // Menggunakan Enum Status yang sama

@Entity
@Table(name = "ukm")
public class Ukm { 
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ukm")
    private Long idUkm;

    @Column(name = "nama_ukm", nullable = false, length = 100)
    private String namaUkm;

    private String logo;

    @Column(name = "gambar_logo", length = 255)
    private String gambarLogo;

    @Lob
    private String deskripsi;

    private String ketua;

    private String periode;

    @Column(name = "nama_prodi", length = 100)
    private String namaProdi;

    @Column(name = "contact_person", length = 100)
    private String contactPerson;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "enum('aktif','nonaktif')")
    private Status status;

    @Column(name = "tanggal_dibuat", insertable = false, updatable = false)
    private LocalDateTime tanggalDibuat;

    @Column(name = "dihapus_pada")
    private LocalDateTime dihapusPada;
    
    // --- Constructors ---
    public Ukm() {}
    
    public Ukm(String namaUkm, String logo, String gambarLogo, String deskripsi, String ketua, String periode, String namaProdi, String contactPerson, Status status) {
        this.namaUkm = namaUkm;
        this.logo = logo;
        this.gambarLogo = gambarLogo;
        this.deskripsi = deskripsi;
        this.ketua = ketua;
        this.periode = periode;
        this.namaProdi = namaProdi;
        this.contactPerson = contactPerson;
        this.status = status;
    }

    // --- Getters dan Setters ---
    
    public Long getIdUkm() {
        return idUkm;
    }

    public void setIdUkm(Long idUkm) {
        this.idUkm = idUkm;
    }

    public String getNamaUkm() {
        return namaUkm;
    }

    public void setNamaUkm(String namaUkm) {
        this.namaUkm = namaUkm;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getGambarLogo() {
        return gambarLogo;
    }

    public void setGambarLogo(String gambarLogo) {
        this.gambarLogo = gambarLogo;
    }

    public String getDeskripsi() {
        return deskripsi;
    }

    public void setDeskripsi(String deskripsi) {
        this.deskripsi = deskripsi;
    }

    public String getKetua() {
        return ketua;
    }

    public void setKetua(String ketua) {
        this.ketua = ketua;
    }

    public String getPeriode() {
        return periode;
    }

    public void setPeriode(String periode) {
        this.periode = periode;
    }

    public String getNamaProdi() {
        return namaProdi;
    }

    public void setNamaProdi(String namaProdi) {
        this.namaProdi = namaProdi;
    }

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public LocalDateTime getTanggalDibuat() {
        return tanggalDibuat;
    }

    // Tidak perlu setter untuk tanggalDibuat

    public LocalDateTime getDihapusPada() {
        return dihapusPada;
    }

    public void setDihapusPada(LocalDateTime dihapusPada) {
        this.dihapusPada = dihapusPada;
    }
}