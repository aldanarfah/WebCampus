import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-alumni',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './data-alumni.component.html',
  styleUrls: ['./data-alumni.component.css']
})
export class DataAlumniComponent {

  cards = [
    {
      id: 1,
      nama: 'Andi Pratama',
      angkatan: '2015',
      jurusan: 'Teknik Informatika',
      foto: 'https://randomuser.me/api/portraits/men/32.jpg',
      testimoni: 'Pengalaman belajar di sekolah ini sangat berkesan dan membantu karier saya.'
    },
    {
      id: 2,
      nama: 'Siti Rahma',
      angkatan: '2016',
      jurusan: 'Sistem Informasi',
      foto: 'https://randomuser.me/api/portraits/women/44.jpg',
      testimoni: 'Guru-gurunya sangat suportif dan lingkungan belajarnya nyaman.'
    },
    {
      id: 3,
      nama: 'Budi Santoso',
      angkatan: '2017',
      jurusan: 'Teknik Komputer',
      foto: 'https://randomuser.me/api/portraits/men/12.jpg',
      testimoni: 'Materi yang diajarkan sangat relevan dengan dunia kerja.'
    },
    {
      id: 4,
      nama: 'Nisa Amalia',
      angkatan: '2018',
      jurusan: 'RPL',
      foto: 'https://randomuser.me/api/portraits/women/62.jpg',
      testimoni: 'Saya mendapatkan banyak pengalaman project nyata di sekolah.'
    },
    {
      id: 5,
      nama: 'Farhan Yusuf',
      angkatan: '2019',
      jurusan: 'Multimedia',
      foto: 'https://randomuser.me/api/portraits/men/54.jpg',
      testimoni: 'Fasilitas laboratorium sangat lengkap dan modern.'
    },
    {
      id: 6,
      nama: 'Aulia Putri',
      angkatan: '2020',
      jurusan: 'DKV',
      foto: 'https://randomuser.me/api/portraits/women/21.jpg',
      testimoni: 'Lingkungan sekolah yang mendorong kreativitas saya.'
    },
    {
      id: 7,
      nama: 'Dimas Arya',
      angkatan: '2021',
      jurusan: 'TKJ',
      foto: 'https://randomuser.me/api/portraits/men/7.jpg',
      testimoni: 'Ilmu yang didapat sangat berguna ketika masuk dunia IT.'
    },
    {
      id: 8,
      nama: 'Melati Anindya',
      angkatan: '2022',
      jurusan: 'Pariwisata',
      foto: 'https://randomuser.me/api/portraits/women/17.jpg',
      testimoni: 'Guru-gurunya baik dan mudah berkomunikasi.'
    },
    {
      id: 9,
      nama: 'Rangga Saputra',
      angkatan: '2023',
      jurusan: 'Bisnis Digital',
      foto: 'https://randomuser.me/api/portraits/men/90.jpg',
      testimoni: 'Banyak pengalaman organisasi yang bantu saya berkembang.'
    }
  ];

}
