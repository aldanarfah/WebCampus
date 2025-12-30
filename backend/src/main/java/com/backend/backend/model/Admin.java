package com.backend.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDateTime; // Import wajib untuk waktu

@Entity
@Table(name = "admin")
@Data // Lombok otomatis membuat Getter, Setter, ToString, dll
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

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(length = 255, nullable = false)
    private String password; 

    @Column(length = 100)
    private String email;

    @Column(name = "tanggal_dibuat", insertable = false, updatable = false)
    private LocalDateTime tanggalDibuat;

    // --- TAMBAHAN FITUR KEAMANAN (RATE LIMITING) ---
    
    @Column(name = "failed_attempts")
    private int failedAttempts = 0; // Menghitung berapa kali salah password

    @Column(name = "locked_until")
    private LocalDateTime lockedUntil; // Menandai sampai kapan akun dikunci
}