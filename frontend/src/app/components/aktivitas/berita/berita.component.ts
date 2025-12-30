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

  berita = [
    {
      judul: 'TIM INOVATOR DIGITAL RAIH PENGHARGAAN TERTINGGI',
      tanggal: '15 Desember 2025',
      gambar: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      deskripsi: 'Turnamen Mobile Legends: Bang Bang tingkat kampus yang mempertemukan tim-tim terbaik antar jurusan, sebagai ajang kompetisi, sportivitas, dan pengembangan bakat di bidang e-sport.',
      slug: 'tim-inovator-digital-raih-penghargaan-tertinggi'
    },
    {
      judul: 'TIM TRO KEMBALI MENOREHKAN PRESTASI GEMILANG PADA AJANG KONTES MOBILHEMATENERGI (KMHE) 2025',
      tanggal: '5 Januari 2026',
      gambar: '/assets/img/KMHE.jpg',
      deskripsi: 'Workshop pengenalan Git dan GitHub yang membahas dasar version control, kolaborasi tim, serta praktik langsung pengelolaan repository untuk mendukung pengembangan perangkat lunak.',
      slug: 'tim-tro-menorehkan-prestasi-kmhe-2025'
    },
    {
      judul: 'FOKUS PADA PENGEMBANGAN INFRASTRUKTUR BERKELANJUTAN YANG RELEVAN DENAGAN TEKNIK SIPIL DAN PROYEK PROYEK MASA KINI',
      tanggal: '20 Februari 2026',
      gambar: '/assets/img/sipil3.jpg',
      deskripsi: 'Pameran inovasi teknologi yang menampilkan karya, produk, dan riset mahasiswa di bidang teknologi informasi dan rekayasa, sebagai wadah kreativitas dan inovasi.',
      slug: 'fokus-pengembangan-infrastruktur-teknik-sipil'
    }
  ];
}
