import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OrganisasiService } from '../../../../services/organisasi.service';
import { Organisasi } from '../../../../models/organisasi.model';

@Component({
  selector: 'app-organisasi-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './organisasi-edit.component.html',
  styleUrls: ['./organisasi-edit.component.css']
})
export class OrganisasiEditComponent implements OnInit {

  organisasi: Organisasi = {
    namaOrganisasi: '',
    deskripsi: '',
    ketua: '',
    periode: '',
    penanggungJawab: '',
    contactPerson: '',
    namaProdi: '',
    status: 'aktif',
    gambarLogo: '', // Tambahan untuk preview (string url)
    strukturOrganisasi: '' // Tambahan
  };

  id!: number;
  
  // Variabel untuk menampung file yang akan diupload
  selectedFileLogo: File | null = null;
  selectedFileStruktur: File | null = null;
  imageBaseUrl = 'http://localhost:8080/uploads/';

  constructor(
    private organisasiService: OrganisasiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.organisasiService.get(this.id).subscribe({
      next: (data) => {
        this.organisasi = data;
      },
      error: (e) => console.error(e)
    });
  }

  // Fungsi saat user memilih file dari komputer
  onFileSelected(event: any, type: 'logo' | 'struktur') {
    const file: File = event.target.files[0];
    if (file) {
      if (type === 'logo') {
        this.selectedFileLogo = file;
      } else {
        this.selectedFileStruktur = file;
      }
    }
  }

  updateOrganisasi(): void {
    // Validasi Sederhana
    if (!(this.organisasi.namaOrganisasi || '').trim()) {
      alert('Nama Organisasi wajib diisi!');
      return;
    }

    // --- LOGIC UTAMA: Menggunakan FormData ---
    const formData = new FormData();

    // 1. Masukkan data teks (Object Organisasi) sebagai JSON String
    // Backend mengharapkan @RequestPart("organisasi")
    formData.append('organisasi', JSON.stringify(this.organisasi));

    // 2. Masukkan File Logo (Jika user memilih file baru)
    if (this.selectedFileLogo) {
      formData.append('fileLogo', this.selectedFileLogo);
    }

    // 3. Masukkan File Struktur (Jika user memilih file baru)
    if (this.selectedFileStruktur) {
      formData.append('fileStruktur', this.selectedFileStruktur);
    }

    // Kirim FormData ke Service
    this.organisasiService.update(this.id, formData).subscribe({
      next: (res) => {
        alert('Data berhasil diperbarui!');
        this.router.navigate(['/dashboard/organisasi']);
      },
      error: (e) => {
        console.error('Error saat upload:', e);
        alert('Gagal menyimpan data. Cek console untuk detail.');
      }
    });
  }
}