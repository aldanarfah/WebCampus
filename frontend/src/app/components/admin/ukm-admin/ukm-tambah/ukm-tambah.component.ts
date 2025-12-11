import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UkmService } from '../../../../services/ukm.service';
import { Ukm } from '../../../../models/ukm.model';

@Component({
  selector: 'app-ukm-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ukm-tambah.component.html',
  styleUrls: ['./ukm-tambah.component.css']
})
export class UkmTambahComponent {

  // Inisialisasi model dengan field lengkap
  ukm: Ukm = {
    namaUkm: '',
    deskripsi: '',
    ketua: '',
    periode: '',
    penanggungJawab: '', // Field Baru
    contactPerson: '',
    namaProdi: '',
    status: 'aktif',
    gambarLogo: '',
    strukturOrganisasi: ''
  };

  // Variabel penampung file
  selectedFileLogo: File | null = null;
  selectedFileStruktur: File | null = null;

  constructor(private ukmService: UkmService, private router: Router) {}

  // Handle pemilihan file
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

  simpanUkm(): void {
    // Validasi sederhana
    if (!(this.ukm.namaUkm || '').trim()) {
      alert('Nama UKM wajib diisi!');
      return;
    }

    // --- SIAPKAN FORMDATA ---
    const formData = new FormData();

    // 1. Append data teks sebagai JSON string. Key harus "ukm" sesuai backend.
    formData.append('ukm', JSON.stringify(this.ukm));

    // 2. Append file jika ada yang dipilih
    if (this.selectedFileLogo) {
      formData.append('fileLogo', this.selectedFileLogo);
    }
    if (this.selectedFileStruktur) {
      formData.append('fileStruktur', this.selectedFileStruktur);
    }

    // Kirim ke service
    this.ukmService.create(formData).subscribe({
      next: (res) => {
        alert('Data UKM berhasil disimpan!');
        this.router.navigate(['/dashboard/ukm']);
      },
      error: (e) => {
        console.error('Error saat simpan UKM:', e);
        alert('Gagal menyimpan data. Cek console.');
      }
    });
  }
}
