import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Import popup detail
import { DetailDosenComponent } from './detail-dosen/detail-dosen.component';

@Component({
  selector: 'app-data-dosen',
  standalone: true,
  imports: [CommonModule, DetailDosenComponent, FormsModule, RouterModule],
  templateUrl: './data-dosen.component.html',
  styleUrl: './data-dosen.component.css'
})
export class DataDosenComponent {

  searchText: string = '';
  filterJabatan: string = '';

  // POPUP STATE
  selectedDosen: any = null;

  // Dummy data dosen
  dosenList = [
    {
      nama: 'Dr. Budi Santoso, M.Kom',
      nidn: '123456789',
      prodi: 'D3 Teknologi Informasi',
      jabatan: 'Dosen',
      email: 'budi@kampus.ac.id',
      foto: 'https://randomuser.me/api/portraits/men/35.jpg'
    },
    {
      nama: 'Prof. Siti Rahmawati',
      nidn: '987654321',
      prodi: 'D3 Akuntansi',
      jabatan: 'Rektor',
      email: 'siti@kampus.ac.id',
      foto: 'https://randomuser.me/api/portraits/women/35.jpg'
    },
    {
      nama: 'M. Andi Prasetyo, S.Kom',
      nidn: '111222333',
      prodi: 'D4 Rekayasa Otomotif',
      jabatan: 'Tata Usaha',
      email: 'andi@kampus.ac.id',
      foto: 'https://randomuser.me/api/portraits/men/37.jpg'
    },
  ];

  // FILTER LIST
  get filteredDosen() {
    return this.dosenList.filter(d =>
      (this.searchText === '' ||
        d.nama.toLowerCase().includes(this.searchText.toLowerCase()) ||
        d.nidn.includes(this.searchText)) &&
      (this.filterJabatan === '' || d.jabatan === this.filterJabatan)
    );
  }

  // BUKA DETAIL
  openDetail(dosen: any) {
    this.selectedDosen = dosen;
  }

  // TUTUP DETAIL
  closeDetail() {
    this.selectedDosen = null;
  }
}
