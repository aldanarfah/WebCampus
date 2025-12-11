package com.backend.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ukm")
public class Ukm {

    public enum Status {
        aktif, nonaktif
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ukm")
    private Long idUkm;

    @Column(name = "nama_ukm", nullable = false, length = 100)
    private String namaUkm;

    @Column(name = "gambar_logo", length = 255)
    private String gambarLogo;

    // ✨ KOLOM BARU SESUAI DISKUSI
    @Column(name = "struktur_organisasi", length = 255)
    private String strukturOrganisasi;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String deskripsi;

    // ✨ KOLOM BARU SESUAI DISKUSI
    @Column(name = "penanggung_jawab", length = 100)
    private String penanggungJawab;

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

    // --- Constructor Kosong ---
    public Ukm() {}

    // --- Getters and Setters ---
    public Long getIdUkm() { return idUkm; }
    public void setIdUkm(Long idUkm) { this.idUkm = idUkm; }

    public String getNamaUkm() { return namaUkm; }
    public void setNamaUkm(String namaUkm) { this.namaUkm = namaUkm; }

    public String getGambarLogo() { return gambarLogo; }
    public void setGambarLogo(String gambarLogo) { this.gambarLogo = gambarLogo; }

    public String getStrukturOrganisasi() { return strukturOrganisasi; }
    public void setStrukturOrganisasi(String strukturOrganisasi) { this.strukturOrganisasi = strukturOrganisasi; }

    public String getDeskripsi() { return deskripsi; }
    public void setDeskripsi(String deskripsi) { this.deskripsi = deskripsi; }

    public String getPenanggungJawab() { return penanggungJawab; }
    public void setPenanggungJawab(String penanggungJawab) { this.penanggungJawab = penanggungJawab; }

    public String getKetua() { return ketua; }
    public void setKetua(String ketua) { this.ketua = ketua; }

    public String getPeriode() { return periode; }
    public void setPeriode(String periode) { this.periode = periode; }

    public String getNamaProdi() { return namaProdi; }
    public void setNamaProdi(String namaProdi) { this.namaProdi = namaProdi; }

    public String getContactPerson() { return contactPerson; }
    public void setContactPerson(String contactPerson) { this.contactPerson = contactPerson; }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }

    public LocalDateTime getTanggalDibuat() { return tanggalDibuat; }

    public LocalDateTime getDihapusPada() { return dihapusPada; }
    public void setDihapusPada(LocalDateTime dihapusPada) { this.dihapusPada = dihapusPada; }
}