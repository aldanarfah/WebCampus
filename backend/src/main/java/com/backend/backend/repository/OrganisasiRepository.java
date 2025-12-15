package com.backend.backend.repository;

import com.backend.backend.model.Organisasi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OrganisasiRepository extends JpaRepository<Organisasi, Long> {
    
    // 1. UNTUK HALAMAN DEPAN (Mencari Data)
    List<Organisasi> findByStatusAndDihapusPadaIsNull(Organisasi.Status status);

    // 2. UNTUK DASHBOARD (Menghitung Jumlah) - [INI YANG HILANG SEBELUMNYA]
    long countByStatusAndDihapusPadaIsNull(Organisasi.Status status);

    // 3. UNTUK SAMPAH (Menghitung yang terhapus)
    long countByDihapusPadaIsNotNull();
}