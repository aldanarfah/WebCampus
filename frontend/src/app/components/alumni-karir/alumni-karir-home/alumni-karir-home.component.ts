import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumni-karir-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alumni-karir-home.component.html',
  styleUrls: ['./alumni-karir-home.component.css']
})
export class AlumniKarirHomeComponent implements OnInit, OnDestroy {

  // === Alumni Carousel ===
  alumniList = [
    { name: 'Aulia Rahmadani', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780' },
    { name: 'Fajar Saputra', text: 'Pengalaman saya di kampus ini sangat berarti.', img: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780' },
    { name: 'Nadila Afifah', text: 'Dari Anak Desa ke Panggung Dunia: Kisah Alumni yang Membuktikan Mimpi Bisa Dijangkau.', img: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780' },
    { name: 'Aldan Arafah', text: 'Pengalaman saya di kampus ini sangat berarti.', img: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780' },
    { name: 'Muhammad Dimas', text: 'Pengalaman saya di kampus ini sangat berarti dan membantu.', img: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780' },
    { name: 'Muhammad Sulthan Agung', text: 'Pengalaman saya di kampus ini sangat berkesan.', img: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780' },
    { name: 'Bulan Anggani', text: 'Pengalaman saya di kampus ini sangat berkesan.', img: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780' },
    { name: 'Bimasakti Ramayana', text: 'Pengalaman saya di kampus ini sangat berkesan.', img: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780' },
    { name: 'Raja Sagara', text: 'Pengalaman saya di kampus ini sangat berkesan.', img: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=780' },
  ];

  duplicatedList = [...this.alumniList, ...this.alumniList]; // duplicate untuk seamless
  currentIndex = 0;
  itemWidth = 450; // card width + gap
  intervalId: any;
  resetting = false;

  // === Job List ===
  jobList = [
    { 
      date: '1 Desember 2025', 
      title: 'Staff IT – PT Barokah Teguh Empower', 
      img: 'assets/img/job.png', 
      link: '/alumni-karir/loker/detail-loker' 
    },
    { 
      date: '1 Desember 2025', 
      title: 'Administrator – PT Jaya Mandiri', 
      img: 'assets/img/job.png', 
      link: '/alumni-karir/loker/detail-loker' 
    },
    { 
      date: '1 Desember 2025', 
      title: 'Marketing – PT Lintas Global', 
      img: 'assets/img/job.png', 
      link: '/alumni-karir/loker/detail-loker' 
    },
    { 
      date: '1 Desember 2025', 
      title: 'Staff Admin – PT Indo Persada', 
      img: 'assets/img/job.png', 
      link: '/alumni-karir/loker/detail-loker' 
    },
    { 
      date: '1 Desember 2025', 
      title: 'IT Support – PT Arjuna Jaya', 
      img: 'assets/img/job.png', 
      link: '/alumni-karir/loker/detail-loker' 
    },
    { 
      date: '1 Desember 2025', 
      title: 'Finance – PT Mega Utama', 
      img: 'assets/img/job.png', 
      link: '/alumni-karir/loker/detail-loker' 
    }
  ];

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    const halfLength = this.duplicatedList.length / 2;

    this.intervalId = setInterval(() => {
      this.currentIndex++;

      if (this.currentIndex >= halfLength) {
        // reset instan tanpa transition
        this.resetting = true;
        this.currentIndex = 0;
        setTimeout(() => this.resetting = false, 20);
      }
    }, 2500);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
