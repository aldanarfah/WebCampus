import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailKarierComponent, Lowongan } from './detail-karier/detail-karier.component';

@Component({
  selector: 'app-karier',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailKarierComponent],
  templateUrl: './karier.component.html',
  styleUrls: ['./karier.component.css']
})
export class KarierComponent {
  lowongans: Lowongan[] = [
    {
      posisi: 'Frontend Developer',
      perusahaan: 'PT Teknologi Cerdas',
      lokasi: 'Jakarta',
      tanggal: '2025-12-01',
      poster: 'https://picsum.photos/seed/karier1/600/350',
      deskripsi: 'Frontend Developer untuk membangun aplikasi web menggunakan Angular dan Tailwind.'
    },
    {
      posisi: 'Backend Developer',
      perusahaan: 'PT Inovasi Digital',
      lokasi: 'Surabaya',
      tanggal: '2025-11-20',
      poster: 'https://picsum.photos/seed/karier2/600/350',
      deskripsi: 'Backend Developer dengan pengalaman Spring Boot dan REST API.'
    },
    {
      posisi: 'UI/UX Designer',
      perusahaan: 'PT Kreatif Inovasi',
      lokasi: 'Bandung',
      tanggal: '2025-12-10',
      poster: 'https://picsum.photos/seed/karier3/600/350',
      deskripsi: 'Desainer UI/UX untuk membuat antarmuka aplikasi yang intuitif.'
    },
    {
      posisi: 'Data Analyst',
      perusahaan: 'PT Data Solusi',
      lokasi: 'Jakarta',
      tanggal: '2025-12-15',
      poster: 'https://picsum.photos/seed/karier4/600/350',
      deskripsi: 'Analisis data untuk mendukung pengambilan keputusan bisnis.'
    }
  ];

  selectedLowongan: Lowongan | null = null;

  openDetail(lowongan: Lowongan) {
    this.selectedLowongan = lowongan;
  }

  closeDetail() {
    this.selectedLowongan = null;
  }
}
