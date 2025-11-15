import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // wajib untuk ngFor, ngIf, ngClass
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Hero slider otomatis
  currentSlide = 0;

  // Event carousel manual
  currentEvent = 0;

  // Fasilitas carousel otomatis
  currentFacility = 0;

  // Semua gambar sementara pakai kampus1.jpg
  heroImages = [
    { img: 'assets/img/kampus1.jpg', text: 'POLINEMA' },
    { img: 'assets/img/kampus1.jpg', text: 'Kampus Inovasi' },
    { img: 'assets/img/kampus1.jpg', text: 'Unggul dan Kompetitif' },
  ];

  stats = {
    murid: 8000,
    dosen: 400,
    prodi: 25,
    organisasi: 30,
  };

  berita = [
    { img: 'assets/img/kampus1.jpg', title: 'Berita 1', desc: 'Deskripsi berita 1' },
    { img: 'assets/img/kampus1.jpg', title: 'Berita 2', desc: 'Deskripsi berita 2' },
    { img: 'assets/img/kampus1.jpg', title: 'Berita 3', desc: 'Deskripsi berita 3' },
    { img: 'assets/img/kampus1.jpg', title: 'Berita 4', desc: 'Deskripsi berita 4' },
  ];

  events = [
    { img: 'assets/img/kampus1.jpg', title: 'Seminar Nasional' },
    { img: 'assets/img/kampus1.jpg', title: 'Pameran Inovasi' },
    { img: 'assets/img/kampus1.jpg', title: 'Pelatihan AI' },
    { img: 'assets/img/kampus1.jpg', title: 'Hackathon Kampus' },
    { img: 'assets/img/kampus1.jpg', title: 'Lomba Startup' },
  ];

  fasilitas = [
    { img: 'assets/img/kampus1.jpg' },
    { img: 'assets/img/kampus1.jpg' },
    { img: 'assets/img/kampus1.jpg' },
  ];

  ngOnInit() {
    // Hero slider otomatis
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.heroImages.length;
    }, 4000);

    // Fasilitas carousel otomatis
    setInterval(() => {
      this.currentFacility = (this.currentFacility + 1) % this.fasilitas.length;
    }, 5000);
  }
}
