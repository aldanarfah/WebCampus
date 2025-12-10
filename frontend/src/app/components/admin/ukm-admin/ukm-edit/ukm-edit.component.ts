import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UkmService } from '../../../../services/ukm.service';
import { Ukm } from '../../../../models/ukm.model';

@Component({
  selector: 'app-ukm-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ukm-edit.component.html',
  styleUrls: ['./ukm-edit.component.css'] // Pastikan nama file CSS benar (styleUrls pakai 's')
})
export class UkmEditComponent implements OnInit {

  // Inisialisasi LENGKAP agar HTML tidak error
  ukm: Ukm = {
    namaUkm: '',
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

  id!: number;
  selectedFileLogo: File | null = null;
  selectedFileStruktur: File | null = null;

  // ✨ INI VARIABEL YANG DICARI HTML (imageBaseUrl) ✨
  imageBaseUrl = 'http://localhost:8080/uploads/';

  constructor(
    private ukmService: UkmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ukmService.get(this.id).subscribe({
      next: (data) => {
        this.ukm = data;
      },
      error: (e) => console.error(e)
    });
  }

  // ✨ INI FUNGSI YANG DICARI HTML (onFileSelected) ✨
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

  updateUkm(): void {
    // Validasi input
    if (!(this.ukm.namaUkm || '').trim()) {
      alert('Nama UKM tidak boleh kosong!');
      return;
    }

    // --- LOGIC FORMDATA UNTUK UPLOAD ---
    const formData = new FormData();
    formData.append('ukm', JSON.stringify(this.ukm));

    if (this.selectedFileLogo) {
      formData.append('fileLogo', this.selectedFileLogo);
    }
    if (this.selectedFileStruktur) {
      formData.append('fileStruktur', this.selectedFileStruktur);
    }

    this.ukmService.update(this.id, formData).subscribe({
      next: (res) => {
        alert('Data UKM berhasil diperbarui!');
        this.router.navigate(['/dashboard/ukm']);
      },
      error: (e) => {
        console.error('Error update UKM:', e);
        alert('Gagal memperbarui data.');
      }
    });
  }
}
