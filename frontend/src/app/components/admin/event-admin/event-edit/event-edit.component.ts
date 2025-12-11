import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventService } from '../../../../services/event.service';
import { OrganisasiService } from '../../../../services/organisasi.service';
import { UkmService } from '../../../../services/ukm.service';

import { Event } from '../../../../models/event.model';
import { Organisasi } from '../../../../models/organisasi.model';
import { Ukm } from '../../../../models/ukm.model';

@Component({
  selector: 'app-event-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event: Event = {
    namaEvent: '',
    deskripsi: '',
    lokasi: '',
    harga: 0,
    tanggalMulai: '',
    tanggalSelesai: '',
    status: 'publik',
    organisasi: null,
    ukm: null,
    linkPendaftaran: ''
  };

  id!: number;
  selectedFile: File | null = null;
  imageBaseUrl = 'http://localhost:8080/uploads/';

  // Logic Dropdown
  kategoriPemilik: 'umum' | 'organisasi' | 'ukm' = 'umum';
  listOrganisasi: Organisasi[] = [];
  listUkm: Ukm[] = [];
  tempIdOrganisasi: number | null = null;
  tempIdUkm: number | null = null;

  constructor(
    private eventService: EventService,
    private organisasiService: OrganisasiService,
    private ukmService: UkmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.organisasiService.getAll().subscribe(data => this.listOrganisasi = data);
    this.ukmService.getAll().subscribe(data => this.listUkm = data);

    this.id = this.route.snapshot.params['id'];
    this.eventService.get(this.id).subscribe({
      next: (data) => {
        this.event = data;

        // FIX FORMAT TANGGAL: Potong detik (:00) agar terbaca di input HTML
        if (this.event.tanggalMulai) this.event.tanggalMulai = this.event.tanggalMulai.slice(0, 16);
        if (this.event.tanggalSelesai) this.event.tanggalSelesai = this.event.tanggalSelesai.slice(0, 16);

        this.setInitialDropdownState();
      },
      error: (e) => console.error(e)
    });
  }

  setInitialDropdownState() {
    if (this.event.organisasi) {
      this.kategoriPemilik = 'organisasi';
      this.tempIdOrganisasi = this.event.organisasi.idOrganisasi || null;
    } else if (this.event.ukm) {
      this.kategoriPemilik = 'ukm';
      this.tempIdUkm = this.event.ukm.idUkm || null;
    } else {
      this.kategoriPemilik = 'umum';
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

 updateEvent(): void {
    // 1. --- FIX HARGA ---
    this.event.harga = Number(this.event.harga);
    if (isNaN(this.event.harga)) {
        this.event.harga = 0;
    }

    // 2. --- FIX TANGGAL (MASALAH UTAMA ANDA) ---
    // Cek apakah tanggal ada isinya, lalu cek panjang stringnya.
    // Format "yyyy-MM-ddTHH:mm" panjangnya 16 karakter.

    if (this.event.tanggalMulai && this.event.tanggalMulai.length === 16) {
        this.event.tanggalMulai += ':00'; // Tambahkan detik manual
    }

    if (this.event.tanggalSelesai && this.event.tanggalSelesai.length === 16) {
        this.event.tanggalSelesai += ':00'; // Tambahkan detik manual
    }

    // 3. Bungkus ke FormData
    const formData = new FormData();
    formData.append('event', JSON.stringify(this.event));

    if (this.selectedFile) {
      formData.append('filePoster', this.selectedFile);
    }

    // 4. Kirim
    if (this.event.idEvent) {
        this.eventService.update(this.event.idEvent, formData).subscribe({
            next: () => {
                alert('Berhasil update!');
                this.router.navigate(['/dashboard/event']);
            },
            error: (e) => {
                console.error(e);
                alert('Gagal update. Cek console.');
            }
        });
    }
  }
}
