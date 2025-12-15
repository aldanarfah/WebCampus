package com.backend.backend.controller;

import com.backend.backend.model.Event;
import com.backend.backend.repository.EventRepository;
import com.backend.backend.service.EventService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/event")
public class EventController {

    private final EventService eventService;
    private final EventRepository eventRepository;

    public EventController(EventService eventService, EventRepository eventRepository) {
        this.eventService = eventService;
        this.eventRepository = eventRepository;
    }

    @GetMapping
    public List<Event> getAllEvent() {
        return eventService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        return eventService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // --- PERBAIKAN NAMA METHOD DISINI ---
    // UPDATE METHOD INI
    @GetMapping("/organisasi/{id}")
    public ResponseEntity<List<Event>> getEventByOrganisasi(@PathVariable Long id) {
        // PERBAIKAN: Gunakan Event.Status.publik (atau PUBLIK jika enumnya uppercase)
        List<Event> list = eventRepository.findByOrganisasi_IdOrganisasiAndStatusAndDihapusPadaIsNullOrderByTanggalMulaiDesc(id, Event.Status.publik);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/ukm/{id}")
    public ResponseEntity<List<Event>> getEventByUkm(@PathVariable Long id) {
        List<Event> list = eventRepository.findByUkm_IdUkmAndStatusAndDihapusPadaIsNullOrderByTanggalMulaiDesc(id, Event.Status.publik);
        return ResponseEntity.ok(list);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Event> createEvent(
            @RequestPart("event") String eventJson,
            @RequestPart(value = "filePoster", required = false) MultipartFile filePoster
    ) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            Event event = mapper.readValue(eventJson, Event.class);

            if (event.getDibuatOleh() != null) {
                System.out.println("Sukses! ID Admin Pembuat: " + event.getDibuatOleh().getIdAdmin());
            }

            Event created = eventService.create(event, filePoster);
            return new ResponseEntity<>(created, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Event> updateEvent(
            @PathVariable Long id,
            @RequestPart("event") String eventJson,
            @RequestPart(value = "filePoster", required = false) MultipartFile filePoster
    ) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            Event details = mapper.readValue(eventJson, Event.class);
            Event updated = eventService.update(id, details, filePoster);

            if (updated != null) return ResponseEntity.ok(updated);
            else return ResponseEntity.notFound().build();
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteEvent(@PathVariable Long id) {
        if (eventService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}