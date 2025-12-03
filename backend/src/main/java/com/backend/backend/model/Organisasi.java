package com.backend.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "organisasi")
public class Organisasi { 
    
    public enum Status {
        aktif, nonaktif
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_organisasi")
    private Long idOrganisasi;

    @Column(name = "nama_organisasi", nullable = false, length = 100)
    private String namaOrganisasi;

    private String logo;

    @Column(name = "gambar_logo", length = 255)
    private String gambarLogo;

    @Lob 
    private String deskripsi;

    @Column(name = "penanggung_jawab", length = 100)
    private String penanggungJawab;

    private String ketua;

    private String periode;

    @Column(name = "nama_prodi", length = 100)
    private String namaProdi;

    @Column(name = "contact_person", length = 100)
    private String contactPerson;

    @Column(name = "struktur_organisasi", columnDefinition = "JSON")
    private String strukturOrganisasi; 

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "enum('aktif','nonaktif')")
    private Status status;

    @Column(name = "tanggal_dibuat", insertable = false, updatable = false)
    private LocalDateTime tanggalDibuat;

    @Column(name = "dihapus_pada")
    private LocalDateTime dihapusPada;
    
    // --- Constructors ---
    public Organisasi() {}

    public Organisasi(String namaOrganisasi, String logo, String gambarLogo, String deskripsi, String penanggungJawab, String ketua, String periode, String namaProdi, String contactPerson, String strukturOrganisasi, Status status) {
        this.namaOrganisasi = namaOrganisasi;
        this.logo = logo;
        this.gambarLogo = gambarLogo;
        this.deskripsi = deskripsi;
        this.penanggungJawab = penanggungJawab;
        this.ketua = ketua;
        this.periode = periode;
        this.namaProdi = namaProdi;
        this.contactPerson = contactPerson;
        this.strukturOrganisasi = strukturOrganisasi;
        this.status = status;
    }

    // --- Getters dan Setters ---

    public Long getIdOrganisasi() {
        return idOrganisasi;
    }

    public void setIdOrganisasi(Long idOrganisasi) {
        this.idOrganisasi = idOrganisasi;
    }

    public String getNamaOrganisasi() {
        return namaOrganisasi;
    }

    public void setNamaOrganisasi(String namaOrganisasi) {
        this.namaOrganisasi = namaOrganisasi;
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

    public String getPenanggungJawab() {
        return penanggungJawab;
    }

    public void setPenanggungJawab(String penanggungJawab) {
        this.penanggungJawab = penanggungJawab;
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

    public String getStrukturOrganisasi() {
        return strukturOrganisasi;
    }

    public void setStrukturOrganisasi(String strukturOrganisasi) {
        this.strukturOrganisasi = strukturOrganisasi;
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

    // Tidak perlu setter untuk tanggalDibuat karena diatur oleh database (insertable=false)

    public LocalDateTime getDihapusPada() {
        return dihapusPada;
    }

    public void setDihapusPada(LocalDateTime dihapusPada) {
        this.dihapusPada = dihapusPada;
    }
}