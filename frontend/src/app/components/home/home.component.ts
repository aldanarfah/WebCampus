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
    title: 'Judul Berita Besar',
    img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  };

  beritaSmall = [
    {
      title: 'Judul Berita 2',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVuZ2luZWVyaW5nfGVufDB8fDB8fHww'
    },
    {
      title: 'Judul Berita 3',
      img: 'https://plus.unsplash.com/premium_photo-1681823094945-41f3c086d5ec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGVuZ2luZWVyaW5nfGVufDB8fDB8fHww'
    }
  ];

  // ================= EVENT =================
  // otomatis dipakai di 2 slide
  events = [
    { title: 'Nama Event 1', img: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nfGVufDB8fDB8fHww' },
    { title: 'Nama Event 2', img: 'https://images.unsplash.com/photo-1677594332295-affd04f83115?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Nama Event 3', img: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D' },
    { title: 'Nama Event 4', img: 'https://images.unsplash.com/photo-1554752191-343d87d6c28f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D' },
    { title: 'Nama Event 5', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D' },
    { title: 'Nama Event 6', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D' },
  ];

  // untuk *ngFor pada slide 
  eventSlide1 = this.events.slice(0, 2);
  eventSlide2 = this.events.slice(2, 4);
  eventSlide3 = this.events.slice(4, 6);
}
