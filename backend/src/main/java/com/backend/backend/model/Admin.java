package com.backend.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_admin")
    private Long idAdmin;

    @Column(name = "nama_admin", nullable = false, length = 100)
    private String namaAdmin;

    @Column(length = 50, unique = true, nullable = false)
    private String username;

    @Column(length = 255, nullable = false)
    private String password; 

    @Column(length = 100)
    private String email;

    @Column(name = "tanggal_dibuat", insertable = false, updatable = false)
    private LocalDateTime tanggalDibuat;

    // --- Constructor ---
    public Admin() {}

    // --- Getters dan Setters ---
    public Long getIdAdmin() { return idAdmin; }
    public void setIdAdmin(Long idAdmin) { this.idAdmin = idAdmin; }
    public String getNamaAdmin() { return namaAdmin; }
    public void setNamaAdmin(String namaAdmin) { this.namaAdmin = namaAdmin; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public LocalDateTime getTanggalDibuat() { return tanggalDibuat; }
    // Setter for tanggalDibuat dihindari karena diset oleh DB
}