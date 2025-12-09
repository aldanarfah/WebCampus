import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Jam {
  matkul: string;
  dosen: string;
  ruang: string;
}

@Component({
  selector: 'app-jadwal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './jadwal.component.html',
  styleUrl: './jadwal.component.css'
})
export class JadwalComponent {
  searchKelas: string = '';
  filterTingkat: number = 1;
  filterProdi: string = 'ti';

  prodiList = [
    { label: 'D3 TI', value: 'ti' },
    { label: 'D3 Sipil', value: 'sipil' },
    { label: 'D4 TRO', value: 'tro' },
    { label: 'D3 Akuntansi', value: 'akuntansi' }
  ];

  kelasList: Record<number,string[]> = {
    1: ['1A', '1B', '1C'],
    2: ['2A', '2B', '2C'],
    3: ['3A', '3B', '3C']
  };

  hari = ['Senin','Selasa','Rabu','Kamis','Jumat'];
  jamArray = Array.from({length: 13}, (_, i) => i+1);

  // contoh jadwal per kelas: 5 hari x 13 jam
  jadwal: Record<string, Jam[][]> = {};

  constructor() {
    // isi dummy untuk semua kelas
    Object.values(this.kelasList).flat().forEach(kelas => {
      this.jadwal[kelas] = [];
      for (let h=0; h<5; h++) {
        const row: Jam[] = [];
        for (let j=0; j<13; j++) {
          row.push({
            matkul: `Matkul ${kelas}-${j+1}`,
            dosen: `Dosen ${j+1}`,
            ruang: `R${100+j+1}`
          });
        }
        this.jadwal[kelas].push(row);
      }
    });
  }

  getKelasTampil(): string[] {
    return this.kelasList[this.filterTingkat] || [];
  }
}
