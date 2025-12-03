package com.backend.backend.service;

import com.backend.backend.model.Event;
import com.backend.backend.repository.EventRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    
    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    // CREATE
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    // READ ALL
    public List<Event> findAllEvent() {
        return eventRepository.findAll();
    }
    
    // READ BY ID
    public Optional<Event> findEventById(Long id) {
        return eventRepository.findById(id);
    }
    
    // UPDATE (Logika Aman)
    public Event updateEvent(Long id, Event eventDetails) {
        return eventRepository.findById(id)
            .map(existingEvent -> {
                // Update kolom wajib
                existingEvent.setNamaEvent(eventDetails.getNamaEvent());
                existingEvent.setDeskripsi(eventDetails.getDeskripsi());
                existingEvent.setTanggalMulai(eventDetails.getTanggalMulai());
                existingEvent.setLokasi(eventDetails.getLokasi());
                
                // Update relasi
                existingEvent.setOrganisasi(eventDetails.getOrganisasi());
                existingEvent.setUkm(eventDetails.getUkm());
                existingEvent.setDibuatOleh(eventDetails.getDibuatOleh()); 
                
                // Update kolom opsional
                existingEvent.setTanggalSelesai(eventDetails.getTanggalSelesai());
                existingEvent.setGambarEvent(eventDetails.getGambarEvent());
                existingEvent.setDihapusPada(eventDetails.getDihapusPada());
                
                return eventRepository.save(existingEvent);
            }).orElse(null);
    }
    
    // DELETE
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
    
    // UPLOAD IMAGE (Pastikan method ini ada untuk menangani upload gambar event)
    // Jika Anda menggunakan logika upload yang sama dengan Berita, 
    // Anda bisa memanggil FileController langsung dari Frontend, 
    // tapi jika mau lewat service juga bisa (opsional).
}