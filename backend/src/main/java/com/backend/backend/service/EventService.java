package com.backend.backend.service;

import com.backend.backend.model.Event;
import com.backend.backend.repository.EventRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final Path fileStorageLocation;

    public EventService(EventRepository eventRepository, @Value("${file.upload-dir}") String uploadDir) {
        this.eventRepository = eventRepository;
        this.fileStorageLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
        
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Gagal membuat folder upload", ex);
        }
    }

    private String simpanFile(MultipartFile file) {
        if (file == null || file.isEmpty()) return null;
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;
            Path targetLocation = this.fileStorageLocation.resolve(uniqueFileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return uniqueFileName;
        } catch (IOException ex) {
            throw new RuntimeException("Gagal simpan file " + fileName, ex);
        }
    }

    // --- CRUD ---

    public List<Event> findAll() {
        return eventRepository.findByDihapusPadaIsNullOrderByTanggalMulaiAsc();
    }

    public Optional<Event> findById(Long id) {
        return eventRepository.findById(id);
    }

    public Event create(Event event, MultipartFile filePoster) {
        if (filePoster != null) {
            event.setGambarEvent(simpanFile(filePoster));
        }
        return eventRepository.save(event);
    }

    public Event update(Long id, Event details, MultipartFile filePoster) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            Event existing = optionalEvent.get();
            
            existing.setNamaEvent(details.getNamaEvent());
            existing.setDeskripsi(details.getDeskripsi());
            existing.setLokasi(details.getLokasi());
            existing.setLinkPendaftaran(details.getLinkPendaftaran());
            existing.setTanggalMulai(details.getTanggalMulai());
            existing.setTanggalSelesai(details.getTanggalSelesai());
            existing.setStatus(details.getStatus()); 
            
            // --- PERBAIKAN DI SINI ---
            // Kita tambahkan update Harga agar data tersimpan
            existing.setHarga(details.getHarga());
            // -------------------------

            // Update Relasi
            existing.setOrganisasi(details.getOrganisasi());
            existing.setUkm(details.getUkm());

            if (filePoster != null && !filePoster.isEmpty()) {
                existing.setGambarEvent(simpanFile(filePoster));
            }

            return eventRepository.save(existing);
        }
        return null;
    }

    public boolean delete(Long id) {
        Optional<Event> event = eventRepository.findById(id);
        if (event.isPresent()) {
            Event existing = event.get();
            existing.setDihapusPada(LocalDateTime.now());
            eventRepository.save(existing);
            return true;
        }
        return false;
    }
}