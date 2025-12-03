package com.backend.backend.repository;

import com.backend.backend.model.Organisasi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganisasiRepository extends JpaRepository<Organisasi, Long> {

}
