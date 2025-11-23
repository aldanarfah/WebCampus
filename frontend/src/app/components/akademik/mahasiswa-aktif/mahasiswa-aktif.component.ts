import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailMahasiswaComponent } from './detail-mahasiswa/detail-mahasiswa.component';

@Component({
  selector: 'app-mahasiswa-aktif',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailMahasiswaComponent],
  templateUrl: './mahasiswa-aktif.component.html',
})
export class MahasiswaAktifComponent {
  searchNim: string = '';
  filterProdi: string = 'ti';

  mahasiswaList = [
    { nim: '12345', nama: 'Ahmad', prodi: 'ti', semester: 4, status: 'Aktif', foto: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { nim: '23456', nama: 'Budi', prodi: 'sipil', semester: 6, status: 'Aktif', foto: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { nim: '34567', nama: 'Citra', prodi: 'tro', semester: 2, status: 'Aktif', foto: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { nim: '45678', nama: 'Dina', prodi: 'akuntansi', semester: 4, status: 'Aktif', foto: 'https://randomuser.me/api/portraits/women/3.jpg' }
  ];

  // Statistik
  get totalMahasiswa() { return this.mahasiswaList.length; }
  get jumlahTI() { return this.mahasiswaList.filter(m => m.prodi==='ti').length; }
  get jumlahSipil() { return this.mahasiswaList.filter(m => m.prodi==='sipil').length; }
  get jumlahTRO() { return this.mahasiswaList.filter(m => m.prodi==='tro').length; }
  get jumlahAkuntansi() { return this.mahasiswaList.filter(m => m.prodi==='akuntansi').length; }

  selectedMahasiswa: any = null;

  search() {
    const result = this.mahasiswaList.find(m => m.nim === this.searchNim && m.prodi === this.filterProdi);
    if(result) this.selectedMahasiswa = result;
    else alert('Mahasiswa tidak ditemukan');
  }

  closeDetail() {
    this.selectedMahasiswa = null;
  }
}
