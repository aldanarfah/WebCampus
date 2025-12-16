// Imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  profileCards = [
    { title: 'Gedung Utama', img: 'assets/img/profil1.jpg' },
    { title: 'Laboratorium', img: 'assets/img/lab.jpg' },
    { title: 'Perpustakaan', img: 'assets/img/lib.jpg' },
    { title: 'Kantin', img: 'assets/img/kantin.jpg' }
  ];

  beritaBig = {
    title: 'Mahasiswa Polinema Raih Juara 1 Robotik Nasional',
    img: 'assets/img/news-big.jpg'
  };

  beritaSmall = [
    { title: 'Kuliah Tamu Industri 4.0', img: 'assets/img/news1.jpg' },
    { title: 'Penerimaan Mahasiswa Baru 2025', img: 'assets/img/news2.jpg' },
    { title: 'Kunjungan Industri ke Jakarta', img: 'assets/img/news3.jpg' }
  ];

  eventSlide1 = [
    { title: 'Seminar Nasional Teknologi', img: 'assets/img/event1.jpg' },
    { title: 'Workshop UI/UX Design', img: 'assets/img/event2.jpg' }
  ];

  eventSlide2 = [
    { title: 'Lomba Coding Tingkat Jatim', img: 'assets/img/event3.jpg' },
    { title: 'Bazar Kewirausahaan', img: 'assets/img/event4.jpg' }
  ];

  eventSlide3 = [
    { title: 'Dies Natalis Polinema', img: 'assets/img/event5.jpg' },
    { title: 'Wisuda ke-50', img: 'assets/img/event6.jpg' }
  ];
}
