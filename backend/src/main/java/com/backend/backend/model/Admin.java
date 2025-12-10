package com.backend.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty; // <--- 1. Tambahkan Import ini
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "admin")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_admin")
    private Long idAdmin;

    @Column(name = "nama_admin", nullable = false, length = 100)
    private String namaAdmin;

    @Column(length = 50, unique = true, nullable = false)
    private String username;

    // 👇 2. TAMBAHKAN ANOTASI INI DI ATAS PASSWORD
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(length = 255, nullable = false)
    private String password; 

    @Column(length = 100)
    private String email;

    @Column(name = "tanggal_dibuat", insertable = false, updatable = false)
    private LocalDateTime tanggalDibuat;
}