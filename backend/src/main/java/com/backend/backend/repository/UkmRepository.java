package com.backend.backend.repository;

import com.backend.backend.model.Ukm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UkmRepository extends JpaRepository<Ukm, Long> {

    // PERBAIKAN: Parameter diganti dari String menjadi Ukm.Status
    long countByStatusAndDihapusPadaIsNull(Ukm.Status status);

    long countByDihapusPadaIsNotNull();
}