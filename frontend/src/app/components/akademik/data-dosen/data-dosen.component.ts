import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import popup detail
import { DetailDosenComponent } from './detail-dosen/detail-dosen.component';

@Component({
  selector: 'app-data-dosen',
  standalone: true,
  imports: [CommonModule, DetailDosenComponent, FormsModule],
  templateUrl: './data-dosen.component.html'
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
      foto: 'assets/img/dosen1.jpg'
    },
    {
      nama: 'Prof. Siti Rahmawati',
      nidn: '987654321',
      prodi: 'D3 Akuntansi',
      jabatan: 'Rektor',
      email: 'siti@kampus.ac.id',
      foto: 'assets/img/dosen2.jpg'
    },
    {
      nama: 'M. Andi Prasetyo, S.Kom',
      nidn: '111222333',
      prodi: 'D4 Rekayasa Otomotif',
      jabatan: 'Tata Usaha',
      email: 'andi@kampus.ac.id',
      foto: 'assets/img/dosen3.jpg'
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
