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

  // ================= PROFIL =================
  profileCards = [
    {
      title: '4 Program Studi',
      img: 'https://plus.unsplash.com/premium_photo-1683887034146-c79058dbdcb1?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: '500+ Mahasiswa Aktif',
      img: 'https://plus.unsplash.com/premium_photo-1723651236713-47f93bc78e98?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: '50+ Dosen dan Staff',
      img: 'https://plus.unsplash.com/premium_photo-1683121910205-adafd6b80e3d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: '5+ Organisasi Mahasiswa dan UKM',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  // ================= BERITA =================
  beritaBig = {
    title: 'TIM INOVATOR DIGITAL RAIH PENGHARGAAN TERTINGGI',
    img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'tim-inovator-digital-raih-penghargaan-tertinggi'
  };

  beritaSmall = [
    {
      title: 'TIM TRO KEMBALI MENOREHKAN PRESTASI GEMILANG PADA AJANG KONTES MOBILHEMATENERGI (KMHE) 2025',
      img: '/assets/img/KMHE.jpg',
      slug: 'tim-tro-menorehkan-prestasi-kmhe-2025'
    },
    {
      title: 'FOKUS PADA PENGEMBANGAN INFRASTRUKTUR BERKELANJUTAN YANG RELEVAN DENAGAN TEKNIK SIPIL DAN PROYEK PROYEK MASA KINI',
      img: '/assets/img/sipil3.jpg',
      slug: 'fokus-pengembangan-infrastruktur-teknik-sipil'
    }
  ];


  // ================= EVENT =================
  // otomatis dipakai di 2 slide
 events = [
  { 
    title: 'MLBB Mobile Legends : Bang Bang Tournament', 
    subtitle: 'Buktikan skill-mu di Event Mobile Legends Kampus 2025', 
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'mlbb-tournament'
  },
  { 
    title: 'Git & Github An Introduction', 
    subtitle: 'Information Technology Bootcamp', 
    img: '/assets/img/git.jpg',
    slug: 'git-github-introduction'
  },
  { 
    title: 'Tech Innovation Fair', 
    subtitle: 'Ide Brillianmu Bisa Ubah Masa Depan', 
    img: '/assets/img/pelatian-coding.jpeg',
    slug: 'tech-innovation-fair'
  },
  { 
    title: 'AICONIC', 
    subtitle: 'AI and Digital Marketing: Transforming Bussiness throught Intelligent Technologies',
    img: '/assets/img/AICONIC.jpg',
    slug: 'aiconic'
  },
  { 
    title: 'Campus Indutry Collabboration', 
    subtitle: 'Politeknik Negerii Malang Kampus Lumajang', 
    img: '/assets/img/CIC.jpeg',
    slug: 'campus-industry-collaboration'
  },
  { 
    title: 'Seminar FACULTY OF INDUSTRIAL TECHNOLOGY', 
    subtitle: 'Mari datang untuk mengetahui lebih banyak tentang industri teknologi', 
    img: '/assets/img/seminar.png',
    slug: 'seminar-faculty-industrial-tech'
  },
];


  // untuk *ngFor pada slide
  eventSlide1 = this.events.slice(0, 2);
  eventSlide2 = this.events.slice(2, 4);
  eventSlide3 = this.events.slice(4, 6);
}
