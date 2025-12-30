import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  events = [
    {
  judul: 'MLBB Mobile Legends : Bang Bang Tournament',
  tanggal: '15 Desember 2025',
  gambar: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nfGVufDB8fDB8fHww',
  deskripsi:
    'Turnamen Mobile Legends: Bang Bang tingkat kampus yang mempertemukan tim-tim terbaik antar jurusan, sebagai ajang kompetisi, sportivitas, dan pengembangan bakat di bidang e-sport.',
  path: '/aktivitas/event/mlbb-tournament'
},
{
  judul: 'Git & Github An Introduction',
  tanggal: '5 Januari 2026',
  gambar: '/assets/img/git.jpg',
  deskripsi:
    'Workshop pengenalan Git dan GitHub yang membahas dasar version control, kolaborasi tim, serta praktik langsung pengelolaan repository untuk mendukung pengembangan perangkat lunak.',
  path: '/aktivitas/event/git-github-introduction'
},
{
  judul: 'Tech Innovation Fair',
  tanggal: '20 Februari 2026',
  gambar: '/assets/img/pelatian-coding.jpeg',
  deskripsi:
    'Pameran inovasi teknologi yang menampilkan karya, produk, dan riset mahasiswa di bidang teknologi informasi dan rekayasa, sebagai wadah kreativitas dan inovasi.',
  path: '/aktivitas/event/tech-innovation-fair'
},
{
  judul: 'AICONIC',
  tanggal: '20 Februari 2026',
  gambar: '/assets/img/AICONIC.jpg',
  deskripsi:
    'Seminar bertema Artificial Intelligence dan Digital Marketing yang membahas pemanfaatan teknologi cerdas dalam transformasi bisnis serta strategi pemasaran digital di era modern.',
  path: '/aktivitas/event/aiconic'
},
{
  judul: 'Campus Industry Collaboration',
  tanggal: '20 Februari 2026',
  gambar: '/assets/img/CIC.jpeg',
  deskripsi:
    'Forum kolaborasi antara kampus dan industri yang bertujuan mempererat kerja sama, membahas kebutuhan dunia kerja, serta membuka peluang magang, riset, dan pengembangan karier mahasiswa.',
  path: '/aktivitas/event/campus-industry-collaboration'
},
{
  judul: 'Seminar FACULTY OF INDUSTRIAL TECHNOLOGY',
  tanggal: '20 Februari 2026',
  gambar: '/assets/img/seminar.png',
  deskripsi:
    'Kompetisi e-sport tingkat kampus yang melibatkan berbagai cabang permainan populer, bertujuan menyalurkan minat mahasiswa di bidang game kompetitif dan membangun jiwa kompetisi yang sehat.',
  path: '/aktivitas/event/seminar-faculty-industrial-tech'
}

  ];

}
