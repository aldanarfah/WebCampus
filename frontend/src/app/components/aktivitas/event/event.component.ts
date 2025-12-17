import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {

  events = [
    {
      judul: 'Seminar Nasional Teknologi dan Inovasi 2025',
      tanggal: '15 Desember 2025',
      gambar: '/assets/img/event-kampus1.jpg',
      deskripsi:
        'Seminar nasional dengan pembicara dari industri dan akademisi, membahas peran AI dalam dunia pendidikan dan industri 5.0.',
      path: '/aktivitas/event/seminar-nasional'
    },
    {
      judul: 'Festival Kewirausahaan Mahasiswa',
      tanggal: '5 Januari 2026',
      gambar: '/assets/img/event-kampus2.jpg',
      deskripsi:
        'Ajang tahunan mahasiswa untuk memamerkan produk dan ide bisnis kreatif dari berbagai jurusan di kampus.',
      path: '/aktivitas/event/festival-wirausaha'
    },
    {
      judul: 'Turnamen Esport Kampus 2025',
      tanggal: '20 Februari 2026',
      gambar: '/assets/img/event-kampus3.jpg',
      deskripsi:
        'Kompetisi e-sport antar jurusan yang diikuti puluhan tim dengan hadiah total puluhan juta rupiah.',
      path: '/aktivitas/event/esport-2025'
    }
  ];

  // 🔴 INI YANG KEMARIN BELUM ADA
  selectedEvent: any = null;

  openModal(event: any) {
    this.selectedEvent = event;
  }

  closeModal() {
    this.selectedEvent = null;
  }
}

