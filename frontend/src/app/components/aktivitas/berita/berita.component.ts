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
    gambar: 'assets/img/berita-utama.jpg',
    ringkasan:
      'Tim mahasiswa HMTI berhasil meraih juara 1 dalam ajang hackathon nasional dengan aplikasi inovatif berbasis AI yang membantu UMKM digitalisasi usahanya.',
    path: '/aktivitas/berita/hackathon-2025'
  };

  beritaLain = [
    {
      judul: 'UKM Mapala Sukses Mendaki Gunung Rinjani',
      gambar: 'assets/img/berita-mapala.jpg',
      path: '/aktivitas/berita/mapala-rinjani'
    },
    {
      judul: 'BEM Gelar Seminar Nasional Kepemimpinan 2025',
      gambar: 'assets/img/berita-bem.jpg',
      path: '/aktivitas/berita/seminar-bem'
    },
    {
      judul: 'HMTI Kembangkan Sistem Absensi Berbasis QR Code',
      gambar: 'assets/img/berita-hmti.jpg',
      path: '/aktivitas/berita/absensi-qr'
    }
  ];
}
