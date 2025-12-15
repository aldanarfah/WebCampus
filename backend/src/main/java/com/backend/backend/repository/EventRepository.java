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
    // Tambah ini:
List<Event> findByUkm_IdUkmOrderByTanggalMulaiDesc(Long idUkm);
List<Event> findByOrganisasi_IdOrganisasiOrderByTanggalMulaiDesc(Long idOrganisasi);
    // 2. Hitung yang TERHAPUS (Ada di tong sampah)
    long countByDihapusPadaIsNotNull();

    // REVISI LOGIC: Tambah filter Status & DihapusPadaIsNull
    List<Event> findByOrganisasi_IdOrganisasiAndStatusAndDihapusPadaIsNullOrderByTanggalMulaiDesc(Long idOrganisasi, Event.Status status);

    List<Event> findByUkm_IdUkmAndStatusAndDihapusPadaIsNullOrderByTanggalMulaiDesc(Long idUkm, Event.Status status);
}