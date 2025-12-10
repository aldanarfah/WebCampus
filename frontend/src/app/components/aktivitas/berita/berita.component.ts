import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-berita',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component.css']
})
export class BeritaComponent {
  beritaUtama = {
    judul: 'Mahasiswa Teknik Informatika Raih Juara Nasional Hackathon 2025',
    gambar: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780',
    ringkasan:
      'Tim mahasiswa HMTI berhasil meraih juara 1 dalam ajang hackathon nasional dengan aplikasi inovatif berbasis AI yang membantu UMKM digitalisasi usahanya.',
    path: '/aktivitas/berita/hackathon-2025'
  };

  beritaLain = [
    {
      judul: 'UKM Mapala Sukses Mendaki Gunung Rinjani',
      gambar: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780',
      path: '/aktivitas/berita/mapala-rinjani'
    },
    {
      judul: 'BEM Gelar Seminar Nasional Kepemimpinan 2025',
      gambar: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780',
      path: '/aktivitas/berita/seminar-bem'
    },
    {
      judul: 'HMTI Kembangkan Sistem Absensi Berbasis QR Code',
      gambar: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780',
      path: '/aktivitas/berita/absensi-qr'
    }
  ];
}
