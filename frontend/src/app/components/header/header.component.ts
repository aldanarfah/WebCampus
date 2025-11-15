import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // ✅ supaya [img]="Search" dikenali
  Search = Search;

  // ✅ menu navbar kamu
  navigation = [
    { name: 'Home', path: '/' }, // ✅ tambahkan ini di urutan pertama
    {
      name: 'Profil',
      path: '/profil',
      children: [
        { name: 'Sejarah', path: '/profil/sejarah' },
        { name: 'Visi Misi', path: '/profil/visi-misi' },
        { name: 'Pimpinan', path: '/profil/pimpinan' },
        { name: 'Struktur Organisasi', path: '/profil/struktur' },
        { name: 'Sarana & Prasarana', path: '/profil/sarana' }
      ]
    },
    {
      name: 'Akademik',
      path: '/akademik',
      children: [
        { name: 'Data Prodi', path: '/akademik/data-prodi' },
        { name: 'Kurikulum', path: '/akademik/kurikulum' },
        { name: 'Data Dosen', path: '/akademik/data-dosen' },
        { name: 'Mahasiswa Aktif', path: '/akademik/mahasiswa-aktif' },
        { name: 'Jadwal', path: '/akademik/jadwal' }
      ]
    },
    {
      name: 'Aktivitas Kampus',
      path: '/aktivitas',
      children: [
        { name: 'Organisasi', path: '/aktivitas/organisasi' },
        { name: 'UKM', path: '/aktivitas/ukm' },
        { name: 'Berita', path: '/aktivitas/berita' },
        { name: 'Event', path: '/aktivitas/event' }
      ]
    },
    {
      name: 'Alumni',
      path: '/alumni',
      children: [
        { name: 'Data Alumni', path: '/alumni/data-alumni' }
      ]
    },
    { name: 'Karier', path: '/karier' },
    { name: 'Kontak', path: '/contact' }
  ];
}
