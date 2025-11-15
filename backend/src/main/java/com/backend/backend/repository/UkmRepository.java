package com.backend.backend.repository;

import com.backend.backend.model.Ukm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UkmRepository extends JpaRepository<Ukm, Long> {
}