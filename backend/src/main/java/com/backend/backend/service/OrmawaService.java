package com.backend.backend.service;

import com.backend.backend.model.Ormawa;
import com.backend.backend.repository.OrmawaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class OrmawaService {
    
    // Inject Repository untuk akses database
    @Autowired
    private OrmawaRepository organisasiRepository;

    // A. READ: Ambil semua data Organisasi
    public List<Ormawa> findAllOrganisasi() {
        return organisasiRepository.findAll();
    }

    // B. READ: Ambil data Organisasi berdasarkan ID
    public Optional<Ormawa> findOrganisasiById(Long id) {
        return organisasiRepository.findById(id);
    }

    // C. CREATE: Simpan data Organisasi baru
    public Ormawa createOrganisasi(Ormawa organisasi) {
        // Logika bisnis tambahan (misalnya: validasi data sebelum disimpan) bisa diletakkan di sini
        return organisasiRepository.save(organisasi);
    }

    // D. UPDATE: Update data Organisasi yang sudah ada
    public Ormawa updateOrganisasi(Long id, Ormawa organisasiDetails) {
        // 1. Cari Organisasi yang akan diupdate
        Optional<Ormawa> optionalOrg = organisasiRepository.findById(id);
        
        if (optionalOrg.isPresent()) {
            Ormawa existingOrg = optionalOrg.get();
            
            // 2. Set/ganti nilai dari object lama dengan nilai dari object baru
            existingOrg.setNamaOrganisasi(organisasiDetails.getNamaOrganisasi());
            existingOrg.setDeskripsi(organisasiDetails.getDeskripsi());
            existingOrg.setKetua(organisasiDetails.getKetua());
            // TODO: Tambahkan semua setter untuk atribut lain yang perlu diupdate
            
            // 3. Simpan perubahan ke database
            return organisasiRepository.save(existingOrg);
        } else {
            // Jika ID tidak ditemukan, kembalikan null atau throw Exception
            return null; 
        }
    }

    // E. DELETE: Hapus data Organisasi berdasarkan ID
    public boolean deleteOrganisasi(Long id) {
        if (organisasiRepository.existsById(id)) {
            organisasiRepository.deleteById(id);
            return true;
        }
        return false;
    }
}