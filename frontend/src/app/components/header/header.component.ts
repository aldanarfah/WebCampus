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
  Search = Search;

  navigation = [
    { name: 'Home', path: '/' },
    {
      name: 'Profil',
      path: '/profil',
      children: [
        { name: 'Sejarah', path: '/profil/sejarah' },
        { name: 'Visi Misi', path: '/profil/visi-misi' },
        { name: 'Pimpinan', path: '/profil/pimpinan' },
        { name: 'Struktur Organisasi', path: '/profil/struktur-organisasi' },
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
      name: 'Kemahasiswaan', // Ganti labelnya
      path: '/kemahasiswaan',
      children: [
        // Pastikan path-nya sesuai routing baru
        { name: 'Organisasi', path: '/kemahasiswaan/organisasi' },
        { name: 'UKM', path: '/kemahasiswaan/ukm' },
        { name: 'Berita', path: '/kemahasiswaan/berita' },
        { name: 'Event', path: '/kemahasiswaan/event' }
      ]
    },
    {
      name: 'Alumni',
      path: '/alumni',
      children: [
        { name: 'Kata Alumni', path: '/alumni/data-alumni' },
        { name: 'Kegiatan Alumni', path: '/alumni/kegiatan-alumni' }
      ]
    },
    { name: 'Karier', path: '/karier' },
    {
      name: 'PMB',
      path: '/pmb',
      children: [
        { name: 'Beasiswa', path: '/pmb/beasiswa' }
      ]
    }
  ];
}
