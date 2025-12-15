package com.backend.backend.repository;

import com.backend.backend.model.Ukm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UkmRepository extends JpaRepository<Ukm, Long> {

    // 1. UNTUK HALAMAN DEPAN
    List<Ukm> findByStatusAndDihapusPadaIsNull(Ukm.Status status);

    // 2. UNTUK DASHBOARD
    long countByStatusAndDihapusPadaIsNull(Ukm.Status status);

    // 3. UNTUK SAMPAH
    long countByDihapusPadaIsNotNull();
}