import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BeritaService } from '../../../../services/berita.service';
import { Berita } from '../../../../models/berita.model';

@Component({
  selector: 'app-berita-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './berita-edit.component.html',
  styleUrl: './berita-edit.component.css'
})
export class BeritaEditComponent implements OnInit {

  berita: Berita = {
    judul: '',
    isi: '',
    status: 'publik',
    dibuatOleh: { idAdmin: 1 }
  };

  id!: number;
  selectedFile: File | null = null;
  previewUrl: any = null;

  constructor(
    private beritaService: BeritaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // Ambil data lama
    this.beritaService.get(this.id).subscribe({
      next: (data) => {
        this.berita = data;
        // Tampilkan gambar lama jika ada
        if (data.gambarBerita) {
          this.previewUrl = 'http://localhost:8080/api/files/download/' + data.gambarBerita;
        }
      },
      error: (e) => console.error(e)
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => this.previewUrl = e.target?.result;
      reader.readAsDataURL(file);
    }
  }

  updateBerita(): void {
    // 🔥 VALIDASI ANTI SPASI
    if (!this.berita.judul.trim() || !this.berita.isi.trim()) {
      alert('Judul dan Isi tidak boleh kosong atau hanya spasi!');
      return;
    }

    if (this.selectedFile) {
      // Jika user ganti gambar, upload dulu
      this.beritaService.uploadImage(this.selectedFile).subscribe({
        next: (res) => {
          this.berita.gambarBerita = res.fileName;
          this.saveUpdate();
        },
        error: () => alert('Gagal upload gambar baru.')
      });
    } else {
      // Jika tidak ganti gambar, langsung update data
      this.saveUpdate();
    }
  }

  saveUpdate(): void {
    this.beritaService.update(this.id, this.berita).subscribe({
      next: () => {
        alert('Berita berhasil diperbarui!');
        this.router.navigate(['/dashboard/berita']);
      },
      error: (e) => {
        console.error(e);
        alert('Gagal update berita.');
      }
    });
  }
}
