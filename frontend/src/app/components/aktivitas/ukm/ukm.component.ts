import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ukm',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ukm.component.html',
  styleUrls: ['./ukm.component.css']
})
export class UkmComponent {
  ukms = [
    {
      nama: 'UKM Musik',
      deskripsi: 'Wadah bagi mahasiswa yang memiliki minat di bidang musik dan pertunjukan.',
      path: '/aktivitas/ukm/musik',
      gambar: 'assets/img/ukm-musik.jpg'
    },
    {
      nama: 'UKM Olahraga',
      deskripsi: 'Tempat bagi mahasiswa yang aktif di berbagai cabang olahraga.',
      path: '/aktivitas/ukm/olahraga',
      gambar: 'assets/img/ukm-olahraga.jpg'
    },
    {
      nama: 'UKM Kewirausahaan',
      deskripsi: 'Mengembangkan jiwa entrepreneur di kalangan mahasiswa.',
      path: '/aktivitas/ukm/wirausaha',
      gambar: 'assets/img/ukm-wirausaha.jpg'
    }
  ];
}
