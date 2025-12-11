import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BeritaService } from '../../../../services/berita.service';
import { OrganisasiService } from '../../../../services/organisasi.service';
import { UkmService } from '../../../../services/ukm.service';

import { Berita } from '../../../../models/berita.model';
import { Organisasi } from '../../../../models/organisasi.model';
import { Ukm } from '../../../../models/ukm.model';

@Component({
  selector: 'app-berita-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './berita-tambah.component.html',
  styleUrls: ['./berita-tambah.component.css']
})
export class BeritaTambahComponent implements OnInit {

  berita: Berita = {
    judul: '',
    isi: '',
    status: 'draft',
    organisasi: null,
    ukm: null,
    dibuatOleh: 1 // Default sementara (akan ditimpa di simpanBerita)
  };

  selectedFile: File | null = null;

  // Logic Dropdown
  kategoriPemilik: 'umum' | 'organisasi' | 'ukm' = 'umum';
  listOrganisasi: Organisasi[] = [];
  listUkm: Ukm[] = [];

  // Penampung ID sementara saat memilih dropdown
  tempIdOrganisasi: number | null = null;
  tempIdUkm: number | null = null;

  constructor(
    private beritaService: BeritaService,
    private organisasiService: OrganisasiService,
    private ukmService: UkmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Ambil data untuk dropdown
    this.organisasiService.getAll().subscribe(data => this.listOrganisasi = data);
    this.ukmService.getAll().subscribe(data => this.listUkm = data);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
simpanBerita(): void {
    if (!this.berita.judul || !this.berita.isi) {
      alert('Judul dan Isi berita wajib diisi!');
      return;
    }

    // =================================================================
    // PERBAIKAN: SESUAIKAN DENGAN NAMA DI CONSOLE (idAdmin)
    // =================================================================
    const adminStr = localStorage.getItem('admin');
    if (adminStr) {
      try {
        const adminData = JSON.parse(adminStr);

        // Cek Console Anda: namanya "idAdmin", bukan "id_admin"
        const idAdmin = adminData.idAdmin || adminData.id_admin || 1;

        this.berita.dibuatOleh = idAdmin;
        console.log('BERHASIL! ID Admin yang dipakai:', idAdmin); // Cek ini di console nanti
      } catch (error) {
        this.berita.dibuatOleh = 1;
      }
    } else {
      this.berita.dibuatOleh = 1;
    }
    // =================================================================

    // --- LOGIC LAINNYA TETAP SAMA ---
    this.berita.organisasi = null;
    this.berita.ukm = null;

    if (this.kategoriPemilik === 'organisasi' && this.tempIdOrganisasi) {
        this.berita.organisasi = { idOrganisasi: this.tempIdOrganisasi } as any;
    } else if (this.kategoriPemilik === 'ukm' && this.tempIdUkm) {
        this.berita.ukm = { idUkm: this.tempIdUkm } as any;
    }

    const formData = new FormData();
    formData.append('berita', JSON.stringify(this.berita));
    if (this.selectedFile) {
      formData.append('fileGambar', this.selectedFile);
    }

    this.beritaService.create(formData).subscribe({
      next: () => {
        alert('Berita berhasil dibuat!');
        this.router.navigate(['/dashboard/berita']);
      },
      error: (e) => {
        console.error(e);
        alert('Gagal menyimpan berita.');
      }
    });
  }
}
