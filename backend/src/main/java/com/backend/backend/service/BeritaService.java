package com.backend.backend.service;

import com.backend.backend.model.Berita;
import com.backend.backend.repository.BeritaRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BeritaService {
    
    private final BeritaRepository beritaRepository;

    public BeritaService(BeritaRepository beritaRepository) {
        this.beritaRepository = beritaRepository;
    }

    // CREATE
    public Berita createBerita(Berita berita) {
        return beritaRepository.save(berita);
    }

    // READ ALL
    public List<Berita> findAllBerita() {
        return beritaRepository.findAll();
    }
    
    // READ BY ID
    public Optional<Berita> findBeritaById(Long id) {
        return beritaRepository.findById(id);
    }
    
    // UPDATE (Logika Aman)
    public Berita updateBerita(Long id, Berita beritaDetails) {
        return beritaRepository.findById(id)
            .map(existingBerita -> {
                // Update kolom wajib
                existingBerita.setJudul(beritaDetails.getJudul());
                existingBerita.setIsi(beritaDetails.getIsi());
                existingBerita.setStatus(beritaDetails.getStatus());
                
                // Update relasi (Pastikan Objek Organisasi/Ukm/Admin sudah terisi ID di JSON)
                existingBerita.setOrganisasi(beritaDetails.getOrganisasi());
                existingBerita.setUkm(beritaDetails.getUkm());
                existingBerita.setDibuatOleh(beritaDetails.getDibuatOleh()); 
                
                // Update kolom opsional
                existingBerita.setGambarBerita(beritaDetails.getGambarBerita());
                existingBerita.setDihapusPada(beritaDetails.getDihapusPada());
                
                return beritaRepository.save(existingBerita);
            }).orElse(null);
    }
    
    // DELETE
    public void deleteBerita(Long id) {
        beritaRepository.deleteById(id);
    }
}