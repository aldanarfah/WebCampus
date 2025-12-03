import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OrganisasiService } from '../../../../services/organisasi.service';
import { Organisasi } from '../../../../models/organisasi.model';

@Component({
  selector: 'app-organisasi-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './organisasi-tambah.component.html',
  styleUrl: './organisasi-tambah.component.css'
})
export class OrganisasiTambahComponent {

  organisasi: Organisasi = {
    namaOrganisasi: '',
    deskripsi: '',
    ketua: '',
    periode: '',
    status: 'aktif'
  };

  constructor(
    private organisasiService: OrganisasiService,
    private router: Router
  ) {}

  saveOrganisasi(): void {
    // Validasi Ekstra: Mencegah input yang isinya cuma spasi
    if (!this.organisasi.namaOrganisasi.trim() || !this.organisasi.deskripsi.trim() || !this.organisasi.ketua.trim()) {
      alert('Data tidak boleh kosong atau hanya spasi!');
      return;
    }

    this.organisasiService.create(this.organisasi).subscribe({
      next: (res) => {
        alert('Data berhasil ditambahkan!');
        // Redirect kembali ke tabel
        this.router.navigate(['/dashboard/organisasi']);
      },
      error: (e) => {
        console.error(e);
        alert('Gagal menyimpan data. Silakan coba lagi.');
      }
    });
  }
}
