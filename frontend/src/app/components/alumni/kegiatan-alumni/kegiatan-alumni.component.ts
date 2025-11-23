import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-kegiatan-alumni',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './kegiatan-alumni.component.html',
  styleUrls: ['./kegiatan-alumni.component.css']
})
export class KegiatanAlumniComponent {

  kegiatan = [
    {
      id: 1,
      judul: 'Reuni Akbar Alumni 2024',
      tanggal: '12 Januari 2024',
      foto: 'https://picsum.photos/seed/reuni/600/350',
      deskripsi: 'Pertemuan akbar lintas angkatan untuk mempererat hubungan alumni.'
    },
    {
      id: 2,
      judul: 'Pengabdian Masyarakat',
      tanggal: '5 Februari 2024',
      foto: 'https://picsum.photos/seed/sosial/600/350',
      deskripsi: 'Alumni melakukan kegiatan sosial membersihkan lingkungan desa.'
    },
    {
      id: 3,
      judul: 'Seminar Karier IT',
      tanggal: '20 Maret 2024',
      foto: 'https://picsum.photos/seed/seminar/600/350',
      deskripsi: 'Seminar berbagi pengalaman kerja di bidang teknologi.'
    },
    {
      id: 4,
      judul: 'Workshop Desain Grafis',
      tanggal: '2 April 2024',
      foto: 'https://picsum.photos/seed/desain/600/350',
      deskripsi: 'Pelatihan desain untuk siswa oleh alumni DKV.'
    },
    {
      id: 5,
      judul: 'Charity Ramadhan',
      tanggal: '15 Mei 2024',
      foto: 'https://picsum.photos/seed/charity/600/350',
      deskripsi: 'Pembagian sembako kepada masyarakat membutuhkan.'
    },
    {
      id: 6,
      judul: 'Lomba Futsal Alumni',
      tanggal: '10 Juni 2024',
      foto: 'https://picsum.photos/seed/futsal/600/350',
      deskripsi: 'Turnamen futsal antar angkatan alumni.'
    }
  ];

}
