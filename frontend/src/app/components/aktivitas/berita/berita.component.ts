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

  // =====================
  // DATA BERITA
  // =====================
  beritaUtama = {
    judul: 'Mahasiswa Teknik Informatika Raih Juara Nasional Hackathon 2025',
    gambar: '/assets/img/event2.jpg',
    ringkasan:
      'Tim mahasiswa HMTI berhasil meraih juara 1 dalam ajang hackathon nasional dengan aplikasi inovatif berbasis AI yang membantu UMKM digitalisasi usahanya.',
    path: '/aktivitas/berita/hackathon-2025'
  };

  beritaLain = [
    {
      judul: 'UKM Mapala Sukses Mendaki Gunung Rinjani',
      gambar: '/assets/img/event3.jpg',
      deskripsi: 'UKM Mapala berhasil melakukan pendakian Gunung Rinjani dengan aman dan sukses.'
    },
    {
      judul: 'BEM Gelar Seminar Nasional Kepemimpinan 2025',
      gambar: '/assets/img/event4.jpg',
      deskripsi: 'BEM menyelenggarakan seminar nasional dengan tema kepemimpinan mahasiswa.'
    },
    {
      judul: 'HMTI Kembangkan Sistem Absensi Berbasis QR Code',
      gambar: '/assets/img/event5.jpg',
      deskripsi: 'HMTI mengembangkan sistem absensi modern menggunakan QR Code.'
    }
  ];

  // =====================
  // STATE MODAL
  // =====================
  selectedBerita: any = null;

  openModal(berita: any): void {
    this.selectedBerita = berita;
  }

  closeModal(): void {
    this.selectedBerita = null;
  }
}
