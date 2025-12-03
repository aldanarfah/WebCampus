import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UkmService } from '../../../../services/ukm.service';
import { Ukm } from '../../../../models/ukm.model';

@Component({
  selector: 'app-ukm-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ukm-tambah.component.html',
  styleUrl: './ukm-tambah.component.css'
})
export class UkmTambahComponent {

  ukm: Ukm = {
    namaUkm: '',
    deskripsi: '',
    ketua: '',
    periode: '',
    status: 'aktif'
  };

  constructor(
    private ukmService: UkmService,
    private router: Router
  ) {}

  saveUkm(): void {
    // 🔥 VALIDASI ANTI SPASI
    if (!this.ukm.namaUkm.trim() || !this.ukm.ketua.trim() || !this.ukm.deskripsi.trim()) {
      alert('Data tidak boleh kosong atau hanya berisi spasi!');
      return;
    }

    this.ukmService.create(this.ukm).subscribe({
      next: (res) => {
        alert('Data UKM berhasil ditambahkan!');
        this.router.navigate(['/dashboard/ukm']);
      },
      error: (e) => {
        console.error(e);
        alert('Gagal menyimpan data.');
      }
    });
  }
}
