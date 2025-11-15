package com.backend.backend.service;

import com.backend.backend.model.Ukm;
import com.backend.backend.repository.UkmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UkmService {
    
    @Autowired
    private UkmRepository ukmRepository;

    // READ ALL
    public List<Ukm> findAllUkm() {
        return ukmRepository.findAll();
    }

    // READ BY ID
    public Optional<Ukm> findUkmById(Long id) {
        return ukmRepository.findById(id);
    }

    // CREATE
    public Ukm createUkm(Ukm ukm) {
        return ukmRepository.save(ukm);
    }

    // UPDATE
    public Ukm updateUkm(Long id, Ukm ukmDetails) {
        Optional<Ukm> optionalUkm = ukmRepository.findById(id);
        
        if (optionalUkm.isPresent()) {
            Ukm existingUkm = optionalUkm.get();
            
            // Set atribut yang boleh diubah
            existingUkm.setNamaUkm(ukmDetails.getNamaUkm());
            existingUkm.setDeskripsi(ukmDetails.getDeskripsi());
            existingUkm.setKetua(ukmDetails.getKetua());
            existingUkm.setStatus(ukmDetails.getStatus());
            // ... set semua atribut lain yang relevan ...
            
            return ukmRepository.save(existingUkm);
        } else {
            return null; 
        }
    }

    // DELETE
    public boolean deleteUkm(Long id) {
        if (ukmRepository.existsById(id)) {
            ukmRepository.deleteById(id);
            return true;
        }
        return false;
    }
}