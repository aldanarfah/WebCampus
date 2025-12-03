import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BeritaService } from '../../../../services/berita.service';
import { Berita } from '../../../../models/berita.model';

@Component({
  selector: 'app-berita-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './berita-tambah.component.html',
  styleUrl: './berita-tambah.component.css'
})
export class BeritaTambahComponent {

  berita: Berita = {
    judul: '',
    isi: '',
    gambarBerita: '',
    status: 'publik',
    dibuatOleh: { idAdmin: 1 } // Default Admin ID 1
  };

  selectedFile: File | null = null;
  previewUrl: any = null;

  constructor(
    private beritaService: BeritaService,
    private router: Router
  ) {}

  // 1. Handle saat file gambar dipilih
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Preview gambar
      const reader = new FileReader();
      reader.onload = (e) => this.previewUrl = e.target?.result;
      reader.readAsDataURL(file);
    }
  }

  // 2. Simpan Data
  saveBerita(): void {
    // Ga bisa spasi
    if (!this.berita.judul.trim() || !this.berita.isi.trim()) {
      alert('Judul dan Isi berita tidak boleh kosong atau hanya spasi!');
      return;
    }

    // Cek apakah ada gambar?
    if (this.selectedFile) {
      // A. Upload gambar dulu
      this.beritaService.uploadImage(this.selectedFile).subscribe({
        next: (response) => {
          // Ambil nama file dari backend
          this.berita.gambarBerita = response.fileName;
          // Lanjut simpan data ke DB
          this.saveDataToDatabase();
        },
        error: (e) => {
          console.error(e);
          alert('Gagal upload gambar! Pastikan backend aktif.');
        }
      });
    } else {
      // B. Simpan tanpa gambar
      this.saveDataToDatabase();
    }
  }

  // Helper Simpan ke Database
  saveDataToDatabase(): void {
    this.beritaService.create(this.berita).subscribe({
      next: () => {
        alert('Berita berhasil ditambahkan!');
        this.router.navigate(['/dashboard/berita']);
      },
      error: (e) => {
        console.error(e);
        alert('Gagal menyimpan berita.');
      }
    });
  }
}
