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
      poster: 'assets/images/loker-frontend.jpg',
      deskripsi: 'Frontend Developer untuk membangun aplikasi web menggunakan Angular dan Tailwind.'
    },
    {
      posisi: 'Backend Developer',
      perusahaan: 'PT Inovasi Digital',
      lokasi: 'Surabaya',
      tanggal: '2025-11-20',
      poster: 'assets/images/loker-backend.jpg',
      deskripsi: 'Backend Developer dengan pengalaman Spring Boot dan REST API.'
    },
    {
      posisi: 'UI/UX Designer',
      perusahaan: 'PT Kreatif Inovasi',
      lokasi: 'Bandung',
      tanggal: '2025-12-10',
      poster: 'assets/images/loker-uiux.jpg',
      deskripsi: 'Desainer UI/UX untuk membuat antarmuka aplikasi yang intuitif.'
    },
    {
      posisi: 'Data Analyst',
      perusahaan: 'PT Data Solusi',
      lokasi: 'Jakarta',
      tanggal: '2025-12-15',
      poster: 'assets/images/loker-data.jpg',
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
