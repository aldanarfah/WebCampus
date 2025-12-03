package com.backend.backend.service;

import com.backend.backend.model.Organisasi;
import com.backend.backend.repository.OrganisasiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class OrganisasiService {
    
    // Inject Repository untuk akses database
    @Autowired
    private OrganisasiRepository organisasiRepository;

    // A. READ: Ambil semua data Organisasi
    public List<Organisasi> findAllOrganisasi() {
        return organisasiRepository.findAll();
    }

    // B. READ: Ambil data Organisasi berdasarkan ID
    public Optional<Organisasi> findOrganisasiById(Long id) {
        return organisasiRepository.findById(id);
    }

    // C. CREATE: Simpan data Organisasi baru
    public Organisasi createOrganisasi(Organisasi organisasi) {
        // Logika bisnis tambahan (misalnya: validasi data sebelum disimpan) bisa diletakkan di sini
        return organisasiRepository.save(organisasi);
    }

    // D. UPDATE: Update data Organisasi yang sudah ada
    public Organisasi updateOrganisasi(Long id, Organisasi organisasiDetails) {
        // 1. Cari Organisasi yang akan diupdate
        Optional<Organisasi> optionalOrg = organisasiRepository.findById(id);
        
        if (optionalOrg.isPresent()) {
            Organisasi existingOrg = optionalOrg.get();
            
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