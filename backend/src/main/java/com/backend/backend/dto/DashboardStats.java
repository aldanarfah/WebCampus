package com.backend.backend.dto;

public class DashboardStats {
    // Organisasi
    private long organisasiAktif;
    private long organisasiTerhapus;

    // UKM
    private long ukmAktif;
    private long ukmTerhapus;

    // Event
    private long eventAktif;
    private long eventTerhapus;

    // Berita
    private long beritaAktif;
    private long beritaTerhapus;

    // Constructor Kosong
    public DashboardStats() {}

    // Constructor Lengkap (Agar mudah diisi di Controller)
    public DashboardStats(long organisasiAktif, long organisasiTerhapus, 
                          long ukmAktif, long ukmTerhapus, 
                          long eventAktif, long eventTerhapus, 
                          long beritaAktif, long beritaTerhapus) {
        this.organisasiAktif = organisasiAktif;
        this.organisasiTerhapus = organisasiTerhapus;
        this.ukmAktif = ukmAktif;
        this.ukmTerhapus = ukmTerhapus;
        this.eventAktif = eventAktif;
        this.eventTerhapus = eventTerhapus;
        this.beritaAktif = beritaAktif;
        this.beritaTerhapus = beritaTerhapus; // Sesuaikan dengan nama parameter di atasnya
    }

    // --- GETTER & SETTER (Wajib Ada) ---
    // (Silakan Generate Getter & Setter untuk semua field di atas via Klik Kanan -> Generate)
    
    public long getOrganisasiAktif() { return organisasiAktif; }
    public void setOrganisasiAktif(long organisasiAktif) { this.organisasiAktif = organisasiAktif; }
    
    public long getOrganisasiTerhapus() { return organisasiTerhapus; }
    public void setOrganisasiTerhapus(long organisasiTerhapus) { this.organisasiTerhapus = organisasiTerhapus; }

    public long getUkmAktif() { return ukmAktif; }
    public void setUkmAktif(long ukmAktif) { this.ukmAktif = ukmAktif; }

    public long getUkmTerhapus() { return ukmTerhapus; }
    public void setUkmTerhapus(long ukmTerhapus) { this.ukmTerhapus = ukmTerhapus; }

    public long getEventAktif() { return eventAktif; }
    public void setEventAktif(long eventAktif) { this.eventAktif = eventAktif; }

    public long getEventTerhapus() { return eventTerhapus; }
    public void setEventTerhapus(long eventTerhapus) { this.eventTerhapus = eventTerhapus; }

    public long getBeritaAktif() { return beritaAktif; }
    public void setBeritaAktif(long beritaAktif) { this.beritaAktif = beritaAktif; }

    public long getBeritaTerhapus() { return beritaTerhapus; }
    public void setBeritaTerhapus(long beritaTerhapus) { this.beritaTerhapus = beritaTerhapus; }
}