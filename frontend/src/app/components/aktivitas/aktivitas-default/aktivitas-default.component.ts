// aktivitas-default.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aktivitas-default',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold mb-4 text-gray-700">
        Selamat Datang di Aktivitas Kampus
      </h1>
      <p class="text-gray-600 max-w-xl mx-auto mb-4">
        Di sini kamu bisa menjelajahi berbagai kegiatan mahasiswa, mulai dari organisasi,
        Unit Kegiatan Mahasiswa (UKM), berita terbaru, hingga event-event menarik di kampus.
      </p>
      <p class="text-gray-500 max-w-xl mx-auto">
        Gunakan sidebar di kiri untuk menavigasi halaman-halaman aktivitas dan temukan informasi lengkap tentang kehidupan kampus.
      </p>
    </div>
  `,
  styleUrls: ['./aktivitas-default.component.css']
})
export class AktivitasDefaultComponent {}
