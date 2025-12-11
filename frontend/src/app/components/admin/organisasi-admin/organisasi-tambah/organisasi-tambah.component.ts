import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OrganisasiService } from '../../../../services/organisasi.service';
import { Organisasi } from '../../../../models/organisasi.model';

@Component({
  selector: 'app-organisasi-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './organisasi-tambah.component.html',
  styleUrls: ['./organisasi-tambah.component.css']
})
export class OrganisasiTambahComponent {

  organisasi: Organisasi = {
    namaOrganisasi: '',
    deskripsi: '',
    ketua: '',
    periode: '',
    penanggungJawab: '',
    contactPerson: '',
    namaProdi: '',
    status: 'aktif',
    gambarLogo: '',
    strukturOrganisasi: ''
  };

  selectedFileLogo: File | null = null;
  selectedFileStruktur: File | null = null;

  constructor(private organisasiService: OrganisasiService, private router: Router) {}

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

  simpanOrganisasi(): void {
    // Validasi input
    if (!(this.organisasi.namaOrganisasi || '').trim()) {
      alert('Nama Organisasi wajib diisi!');
      return;
    }

    // KONVERSI KE FORMDATA
    const formData = new FormData();
    formData.append('organisasi', JSON.stringify(this.organisasi));

    if (this.selectedFileLogo) {
      formData.append('fileLogo', this.selectedFileLogo);
    }
    if (this.selectedFileStruktur) {
      formData.append('fileStruktur', this.selectedFileStruktur);
    }

    // Kirim FormData
    this.organisasiService.create(formData).subscribe({
      next: (res) => {
        alert('Data berhasil disimpan!');
        this.router.navigate(['/dashboard/organisasi']);
      },
      error: (e) => {
        console.error(e);
        alert('Gagal menyimpan data.');
      }
    });
  }
}