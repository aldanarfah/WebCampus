import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EventService } from '../../../../services/event.service';
import { OrganisasiService } from '../../../../services/organisasi.service';
import { UkmService } from '../../../../services/ukm.service';

import { Event } from '../../../../models/event.model';
import { Organisasi } from '../../../../models/organisasi.model';
import { Ukm } from '../../../../models/ukm.model';

@Component({
  selector: 'app-event-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './event-tambah.component.html',
  styleUrls: ['./event-tambah.component.css']
})
export class EventTambahComponent implements OnInit {

  event: Event = {
    namaEvent: '',
    deskripsi: '',
    harga: 0,
    lokasi: '',
    tanggalMulai: '',
    tanggalSelesai: '',
    status: 'publik',
    organisasi: null,
    ukm: null,
    linkPendaftaran: ''
    // Pastikan model Event Anda nanti punya field 'dibuatOleh'
  };

  selectedFile: File | null = null;

  // Variabel Bantuan Input
  tglMulai: string = '';
  jamMulai: string = '';

  tglSelesai: string = '';
  jamSelesai: string = '';

  kategoriPemilik: 'umum' | 'organisasi' | 'ukm' = 'umum';
  listOrganisasi: Organisasi[] = [];
  listUkm: Ukm[] = [];
  tempIdOrganisasi: number | null = null;
  tempIdUkm: number | null = null;

  constructor(
    private eventService: EventService,
    private organisasiService: OrganisasiService,
    private ukmService: UkmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.organisasiService.getAll().subscribe(data => this.listOrganisasi = data);
    this.ukmService.getAll().subscribe(data => this.listUkm = data);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  simpanEvent(): void {
    // 1. GABUNGKAN TANGGAL & JAM
    if (this.tglMulai && this.jamMulai) {
      this.event.tanggalMulai = `${this.tglMulai}T${this.jamMulai}:00`;
    }

    if (this.tglSelesai && this.jamSelesai) {
      this.event.tanggalSelesai = `${this.tglSelesai}T${this.jamSelesai}:00`;
    }

    // Validasi
    if (!this.event.namaEvent || !this.event.tanggalMulai || !this.event.tanggalSelesai) {
      alert('Nama Event, Tanggal, dan Jam wajib diisi lengkap!');
      return;
    }

    // -------------------------------------------------------------------
    // 2. ✨ FIX: SESUAIKAN DENGAN FORMAT JSON LOGIN (idAdmin) ✨
    // -------------------------------------------------------------------
    const adminStorage = localStorage.getItem('admin');

    if (adminStorage) {
      const adminData = JSON.parse(adminStorage);

      // DEBUG: Cek di console browser untuk memastikan ID terbaca
      console.log('Data Admin di Storage:', adminData);

      // PERBAIKAN DI SINI: Gunakan 'idAdmin' (sesuai console), bukan 'id_admin'
      const idAdminFix = adminData.idAdmin || adminData.id_admin; // Jaga-jaga support keduanya

      if (idAdminFix) {
          (this.event as any).dibuatOleh = { idAdmin: idAdminFix };
          console.log('Event akan dibuat oleh Admin ID:', idAdminFix);
      } else {
          alert('Gagal membaca ID Admin. Silakan Logout dan Login ulang.');
          return;
      }

    } else {
      alert('Sesi admin habis. Silakan Login ulang.');
      this.router.navigate(['/login']);
      return;
    }

    // Set Pemilik (Organisasi / UKM) - Logika tetap sama
    this.event.organisasi = null;
    this.event.ukm = null;

    if (this.kategoriPemilik === 'organisasi' && this.tempIdOrganisasi) {
        this.event.organisasi = { idOrganisasi: this.tempIdOrganisasi } as any;
    } else if (this.kategoriPemilik === 'ukm' && this.tempIdUkm) {
        this.event.ukm = { idUkm: this.tempIdUkm } as any;
    }

    // Kirim Data
    const formData = new FormData();
    formData.append('event', JSON.stringify(this.event));
    if (this.selectedFile) {
      formData.append('filePoster', this.selectedFile);
    }

    this.eventService.create(formData).subscribe({
      next: () => {
        alert('Event berhasil dibuat!');
        this.router.navigate(['/dashboard/event']); // Pastikan rute ini benar
      },
      error: (e) => {
        console.error('Gagal simpan event:', e);
        // Tampilkan pesan error yang lebih detail jika backend mengirimnya
        const pesan = e.error ? e.error.message || e.message : 'Cek koneksi backend.';
        alert('Gagal: ' + pesan);
      }
    });
  }
}
