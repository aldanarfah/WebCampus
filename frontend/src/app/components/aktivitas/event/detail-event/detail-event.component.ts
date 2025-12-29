import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-event',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent {

  event: any;

  events = [
    {
      judul: 'MLBB Mobile Legends : Bang Bang Tournament',
      slug: 'mlbb-tournament',
      tanggal: '15 Desember 2025',
      gambar: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nfGVufDB8fDB8fHww',
      deskripsi: 'Turnamen Mobile Legends: Bang Bang tingkat kampus yang mempertemukan tim-tim terbaik antar jurusan, sebagai ajang kompetisi, sportivitas, dan pengembangan bakat di bidang e-sport.'
    },
    {
      judul: 'Git & Github An Introduction',
      slug: 'git-github-introduction',
      tanggal: '5 Januari 2026',
      gambar: '/assets/img/git.jpg',
      deskripsi: 'Workshop pengenalan Git dan GitHub yang membahas dasar version control, kolaborasi tim, serta praktik langsung pengelolaan repository untuk mendukung pengembangan perangkat lunak.'
    },
    {
      judul: 'Tech Innovation Fair',
      slug: 'tech-innovation-fair',
      tanggal: '20 Februari 2026',
      gambar: '/assets/img/pelatian-coding.jpeg',
      deskripsi: 'Pameran inovasi teknologi yang menampilkan karya, produk, dan riset mahasiswa di bidang teknologi informasi dan rekayasa, sebagai wadah kreativitas dan inovasi.'
    },
    {
      judul: 'AICONIC',
      slug: 'aiconic',
      tanggal: '20 Februari 2026',
      gambar: '/assets/img/AICONIC.jpg',
      deskripsi: 'Seminar bertema Artificial Intelligence dan Digital Marketing yang membahas pemanfaatan teknologi cerdas dalam transformasi bisnis serta strategi pemasaran digital di era modern.'
    },
    {
      judul: 'Campus Industry Collaboration',
      slug: 'campus-industry-collaboration',
      tanggal: '20 Februari 2026',
      gambar: '/assets/img/CIC.jpeg',
      deskripsi: 'Forum kolaborasi antara kampus dan industri yang bertujuan mempererat kerja sama, membahas kebutuhan dunia kerja, serta membuka peluang magang, riset, dan pengembangan karier mahasiswa.'
    },
    {
      judul: 'Seminar FACULTY OF INDUSTRIAL TECHNOLOGY',
      slug: 'seminar-faculty-industrial-tech',
      tanggal: '20 Februari 2026',
      gambar: '/assets/img/seminar.png',
      deskripsi: 'Kompetisi e-sport tingkat kampus yang melibatkan berbagai cabang permainan populer, bertujuan menyalurkan minat mahasiswa di bidang game kompetitif dan membangun jiwa kompetisi yang sehat.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.event = this.events.find(e => e.slug === slug);
  }
}
