import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jadwal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jadwal.component.html',
  styleUrls: ['./jadwal.component.css']
})
export class JadwalComponent {

  // State untuk Filter yang sedang aktif
  activeProdi: string = 'Teknologi Informasi';
  activeKelas: string = 'Kelas 1';

  // Data Pilihan Filter
  listProdi = [
    'Teknologi Informasi',
    'Teknologi Sipil',
    'Teknologi Rekayasa Otomotif',
    'Akuntansi'
  ];

  listTingkat = ['Kelas 1', 'Kelas 2', 'Kelas 3'];

  // Header Jam (Jam 1 - Jam 13)
  jamList = Array.from({length: 13}, (_, i) => i + 1);
  hariList = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

  // --- DATA JADWAL ---
  jadwalData: any = {
    '1A': {
      'Senin': [
        { name: 'Matkul 1A-1', dosen: 'Dosen A', room: 'R101', color: 'bg-cyan-200' },
        { name: 'Matkul 1A-1', dosen: 'Dosen A', room: 'R101', color: 'bg-cyan-200' },
        { name: 'Matkul 1A-2', dosen: 'Dosen B', room: 'LB1', color: 'bg-green-300' },
        { name: 'Matkul 1A-2', dosen: 'Dosen B', room: 'LB1', color: 'bg-green-300' },
        null, null, null, null, null, null, null, null, null
      ],
      'Selasa': [
        null, null,
        { name: 'Pemrograman', dosen: 'Pak Eko', room: 'Lab 2', color: 'bg-yellow-300' },
        { name: 'Pemrograman', dosen: 'Pak Eko', room: 'Lab 2', color: 'bg-yellow-300' },
        { name: 'Agama', dosen: 'Bu Siti', room: 'R203', color: 'bg-green-400' },
        null, null, null, null, null, null, null, null
      ]
    },
    '1B': {
      'Senin': [
         { name: 'Basis Data', dosen: 'Bu Ani', room: 'Lab 1', color: 'bg-purple-300' },
         null, null, null, null, null, null, null, null, null, null, null, null
      ]
    },
    // --- DATA KELAS 3B DITAMBAHKAN ---
    '3B': {
      'Senin': [
        null, null,
        { name: 'Cloud Computing', dosen: 'Pak Awan', room: 'Lab Jaringan', color: 'bg-blue-200' },
        { name: 'Cloud Computing', dosen: 'Pak Awan', room: 'Lab Jaringan', color: 'bg-blue-200' },
        { name: 'Metode Penelitian', dosen: 'Prof. Budi', room: 'R305', color: 'bg-orange-200' },
        { name: 'Metode Penelitian', dosen: 'Prof. Budi', room: 'R305', color: 'bg-orange-200' },
        null, null, null, null, null, null, null
      ],
      'Selasa': [
        { name: 'E-Business', dosen: 'Bu Sarah', room: 'R301', color: 'bg-pink-200' },
        { name: 'E-Business', dosen: 'Bu Sarah', room: 'R301', color: 'bg-pink-200' },
        null, null,
        { name: 'Keamanan Siber', dosen: 'Pak Hacker', room: 'Lab Cyber', color: 'bg-gray-300' },
        { name: 'Keamanan Siber', dosen: 'Pak Hacker', room: 'Lab Cyber', color: 'bg-gray-300' },
        null, null, null, null, null, null, null
      ],
      'Rabu': [
        null, null, null, null,
        { name: 'Tugas Akhir', dosen: 'Tim Dosen', room: 'Lab Riset', color: 'bg-red-200' },
        { name: 'Tugas Akhir', dosen: 'Tim Dosen', room: 'Lab Riset', color: 'bg-red-200' },
        null, null, null, null, null, null, null
      ]
    }
  };

  getClassesToShow() {
    if (this.activeKelas === 'Kelas 1') return ['1A', '1B', '1C'];
    if (this.activeKelas === 'Kelas 2') return ['2A', '2B'];

    // Pastikan 3B ada di sini
    if (this.activeKelas === 'Kelas 3') return ['3A', '3B'];

    return [];
  }

  getCell(kelas: string, hariIndex: number, jamIndex: number) {
    const hari = this.hariList[hariIndex];
    const schedule = this.jadwalData[kelas];
    if (schedule && schedule[hari] && schedule[hari][jamIndex]) {
      return schedule[hari][jamIndex];
    }
    return null;
  }
}
