import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BeritaService } from '../../../../services/berita.service';
import { OrganisasiService } from '../../../../services/organisasi.service';
import { UkmService } from '../../../../services/ukm.service';

import { Berita } from '../../../../models/berita.model';
import { Organisasi } from '../../../../models/organisasi.model';
import { Ukm } from '../../../../models/ukm.model';

@Component({
  selector: 'app-berita-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './berita-edit.component.html',
  styleUrls: ['./berita-edit.component.css']
})
export class BeritaEditComponent implements OnInit {

  berita: Berita = {
    judul: '',
    isi: '',
    status: 'draft',
    organisasi: null,
    ukm: null
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
    private beritaService: BeritaService,
    private organisasiService: OrganisasiService,
    private ukmService: UkmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1. Ambil data Dropdown dulu
    this.organisasiService.getAll().subscribe(data => this.listOrganisasi = data);
    this.ukmService.getAll().subscribe(data => this.listUkm = data);

    // 2. Ambil Data Berita Berdasarkan ID
    this.id = this.route.snapshot.params['id'];
    this.beritaService.get(this.id).subscribe({
      next: (data) => {
        this.berita = data;
        this.setInitialDropdownState(); // Setel dropdown sesuai data database
      },
      error: (e) => console.error(e)
    });
  }

  // Fungsi untuk mendeteksi: Berita ini milik siapa? (Saat pertama load)
  setInitialDropdownState() {
    if (this.berita.organisasi) {
      this.kategoriPemilik = 'organisasi';
      this.tempIdOrganisasi = this.berita.organisasi.idOrganisasi || null;
    } else if (this.berita.ukm) {
      this.kategoriPemilik = 'ukm';
      this.tempIdUkm = this.berita.ukm.idUkm || null;
    } else {
      this.kategoriPemilik = 'umum';
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  updateBerita(): void {
    if (!this.berita.judul || !this.berita.isi) {
      alert('Judul dan Isi berita wajib diisi!');
      return;
    }

    // Reset relasi dulu
    this.berita.organisasi = null;
    this.berita.ukm = null;

    // Set relasi baru sesuai pilihan dropdown
    if (this.kategoriPemilik === 'organisasi' && this.tempIdOrganisasi) {
        this.berita.organisasi = { idOrganisasi: this.tempIdOrganisasi } as any;
    } else if (this.kategoriPemilik === 'ukm' && this.tempIdUkm) {
        this.berita.ukm = { idUkm: this.tempIdUkm } as any;
    }

    // Packing ke FormData
    const formData = new FormData();
    formData.append('berita', JSON.stringify(this.berita));

    // Hanya kirim file jika ada file baru yang dipilih
    if (this.selectedFile) {
      formData.append('fileGambar', this.selectedFile);
    }

    this.beritaService.update(this.id, formData).subscribe({
      next: () => {
        alert('Berita berhasil diperbarui!');
        this.router.navigate(['/dashboard/berita']);
      },
      error: (e) => {
        console.error(e);
        alert('Gagal memperbarui berita.');
      }
    });
  }
}
