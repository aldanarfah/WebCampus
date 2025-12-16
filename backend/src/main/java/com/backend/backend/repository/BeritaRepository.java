package com.backend.backend.repository;

import com.backend.backend.model.Berita;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BeritaRepository extends JpaRepository<Berita, Long> {
    
    // Ambil semua berita yang tidak dihapus (Urut Terbaru)
    List<Berita> findByDihapusPadaIsNullOrderByTanggalPublikasiDesc();

    // Filter Berita berdasarkan Organisasi (Urut Terbaru) -> PENTING DIPERBAIKI
    List<Berita> findByOrganisasi_IdOrganisasiAndDihapusPadaIsNullOrderByTanggalPublikasiDesc(Long idOrganisasi);

    // Filter Berita berdasarkan UKM (Urut Terbaru) -> PENTING DIPERBAIKI
    List<Berita> findByUkm_IdUkmAndDihapusPadaIsNullOrderByTanggalPublikasiDesc(Long idUkm);
    // Tambah ini:
List<Berita> findByUkm_IdUkmOrderByTanggalPublikasiDesc(Long idUkm);
List<Berita> findByOrganisasi_IdOrganisasiOrderByTanggalPublikasiDesc(Long idOrganisasi);
    // 1. Hitung yang AKTIF (Belum dihapus)
    long countByDihapusPadaIsNull();

    // 2. Hitung yang TERHAPUS (Ada di tong sampah)
    long countByDihapusPadaIsNotNull();

    // REVISI LOGIC: Tambah filter Status & DihapusPadaIsNull
    // Artinya: Cari berdasarkan Organisasi AND Status AND DihapusPada Kosong
   List<Berita> findByOrganisasi_IdOrganisasiAndStatusAndDihapusPadaIsNullOrderByTanggalPublikasiDesc(Long idOrganisasi, Berita.Status status);

    List<Berita> findByUkm_IdUkmAndStatusAndDihapusPadaIsNullOrderByTanggalPublikasiDesc(Long idUkm, Berita.Status status);
}