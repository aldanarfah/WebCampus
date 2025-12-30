import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { LucideAngularModule, Search } from 'lucide-angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Search = Search;

  // Default True (Muncul di awal)
  showGlobalSearch: boolean = true;

  navigation = [
    { name: 'Home', path: '/' },
    {
      name: 'Profil',
      path: '/profil',
      children: [
        { name: 'Sejarah', path: '/profil/sejarah' },
        { name: 'Visi Misi', path: '/profil/visi-misi' },
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
      name: 'Aktivitas Kampus',
      path: '/aktivitas',
      children: [
        { name: 'Ormawa & UKM', path: '/aktivitas/ormawa-ukm' },
        { name: 'Berita', path: '/aktivitas/berita' },
        { name: 'Event', path: '/aktivitas/event' }
      ]
    },
    {
      name: 'Alumni & Karir',
      path: '/alumni-karir',
      children: [
        { name: 'Kegiatan Alumni', path: '/alumni-karir/kegiatan-alumni' },
        { name: 'Kata Alumni', path: '/alumni-karir/kata-alumni' },
        { name: 'Lowongan Kerja', path: '/alumni-karir/loker' }
      ]
    },
    {
      name: 'PMB',
      path: '/pmb',
      children: [
        { name: 'Beasiswa', path: '/pmb/beasiswa' }
      ]
    }
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkUrl(event.url);
    });
  }

  ngOnInit(): void {
    this.checkUrl(this.router.url);
  }

  checkUrl(url: string): void {
    // Logika untuk menyembunyikan search bar di halaman detail
    if (url.includes('/ormawa-ukm/detail') || url.includes('/detail/')) {
      this.showGlobalSearch = false; // Sembunyikan
    } else {
      this.showGlobalSearch = true;  // Munculkan
    }
  }
}
