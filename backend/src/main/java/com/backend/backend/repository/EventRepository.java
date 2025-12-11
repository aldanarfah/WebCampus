package com.backend.backend.repository;

import com.backend.backend.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {
    
    // Urutkan berdasarkan tanggal mulai paling dekat
    List<Event> findByDihapusPadaIsNullOrderByTanggalMulaiAsc();

    // Filter berdasarkan Organisasi
    List<Event> findByOrganisasi_IdOrganisasiAndDihapusPadaIsNull(Long idOrganisasi);

    // Filter berdasarkan UKM
    List<Event> findByUkm_IdUkmAndDihapusPadaIsNull(Long idUkm);
    // 1. Hitung yang AKTIF (Belum dihapus)
    long countByDihapusPadaIsNull();

    // 2. Hitung yang TERHAPUS (Ada di tong sampah)
    long countByDihapusPadaIsNotNull();
}