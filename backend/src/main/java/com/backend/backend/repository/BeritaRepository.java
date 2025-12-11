package com.backend.backend.repository;

import com.backend.backend.model.Berita;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BeritaRepository extends JpaRepository<Berita, Long> {
    
    // Ambil semua berita yang tidak dihapus
    List<Berita> findByDihapusPadaIsNullOrderByTanggalPublikasiDesc();

    // Filter Berita berdasarkan Organisasi
    List<Berita> findByOrganisasi_IdOrganisasiAndDihapusPadaIsNull(Long idOrganisasi);

    // Filter Berita berdasarkan UKM
    List<Berita> findByUkm_IdUkmAndDihapusPadaIsNull(Long idUkm);
    // 1. Hitung yang AKTIF (Belum dihapus)
    long countByDihapusPadaIsNull();

    // 2. Hitung yang TERHAPUS (Ada di tong sampah)
    long countByDihapusPadaIsNotNull();
}