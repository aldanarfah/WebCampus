import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Alumni {
  name: string;
  year: string;
  major: string;
  photo: string;
}

@Component({
  selector: 'app-kata-alumni',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './kata-alumni.component.html',
  styleUrls: ['./kata-alumni.component.css'] // <-- perbaikan
})
export class KataAlumniComponent {
  alumniList: Alumni[] = [
    { name: 'Ahmad Fauzi', year: 'Angkatan 2021', major: 'D3 Teknik Sipil', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Siti Nurhaliza', year: 'Angkatan 2022', major: 'D3 Akuntansi', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Rizky Pratama', year: 'Angkatan 2020', major: 'D3 Teknologi Informasi', photo: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { name: 'Budi Santoso', year: 'Angkatan 2019', major: 'D4 Teknologi Rekayasa Otomotif', photo: 'https://randomuser.me/api/portraits/men/55.jpg' },
    { name: 'Lina Marlina', year: 'Angkatan 2021', major: 'D3 Akuntansi', photo: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { name: 'Fajar Hidayat', year: 'Angkatan 2022', major: 'D3 Teknik Sipil', photo: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Andi Prasetyo', year: 'Angkatan 2020', major: 'D3 Teknologi Informasi', photo: 'https://randomuser.me/api/portraits/men/23.jpg' },
    { name: 'Rina Kurnia', year: 'Angkatan 2019', major: 'D4 Teknologi Rekayasa Otomotif', photo: 'https://randomuser.me/api/portraits/women/21.jpg' },
    { name: 'Hendra Wijaya', year: 'Angkatan 2021', major: 'D3 Akuntansi', photo: 'https://randomuser.me/api/portraits/men/65.jpg' },
    { name: 'Yoga Pratama', year: 'Angkatan 2022', major: 'D3 Teknologi Informasi', photo: 'https://randomuser.me/api/portraits/men/70.jpg' },
    { name: 'Dewi Lestari', year: 'Angkatan 2021', major: 'D3 Akuntansi', photo: 'https://randomuser.me/api/portraits/women/50.jpg' },
    { name: 'Ferdian Saputra', year: 'Angkatan 2020', major: 'D3 Teknik Sipil', photo: 'https://randomuser.me/api/portraits/men/77.jpg' },
  ];
}
