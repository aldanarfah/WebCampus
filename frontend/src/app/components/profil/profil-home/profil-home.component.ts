import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Card {
  title: string;
  image: string;
  link: string[];
}

interface Statistik {
  number: string;
  label: string;
}

interface FasilitasImage {
  image: string;
  alt: string;
}

@Component({
  selector: 'app-profil-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profil-home.component.html',
  styleUrls: ['./profil-home.component.css']
})
export class ProfilHomeComponent implements OnInit {
  currentIndex = 0;

  cards: Card[] = [
    { title: 'Sejarah', image: '/assets/img/h.png', link: ['/profil/sejarah'] },
    { title: 'Visi & Misi', image: '/assets/img/VISI-MISI.png', link: ['/profil/visi-misi'] },
    { title: 'Struktur Organisasi', image: '/assets/img/Struktur-Organisasi.png', link: ['/profil/struktur-organisasi'] }
  ];

  stats: Statistik[] = [
    { number: '500+', label: 'Mahasiswa Aktif' },
    { number: '4', label: 'Program Studi' },
    { number: '50+', label: 'Dosen & Staff' },
    { number: '5+', label: 'Organisasi Mahasiswa' }
  ];

  fasilitasImages: FasilitasImage[] = [
    { image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=780', alt: 'Fasilitas 1' },
    { image: 'https://plus.unsplash.com/premium_photo-1682284079664-c90a1603733b?w=780', alt: 'Fasilitas 2' },
    { image: 'https://plus.unsplash.com/premium_photo-1661723254874-57922ebbe0c9?w=780', alt: 'Fasilitas 3' }
  ];

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 4000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.fasilitasImages.length;
  }
}
