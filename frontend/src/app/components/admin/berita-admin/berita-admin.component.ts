import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BeritaService } from '../../../services/berita.service';
import { Berita } from '../../../models/berita.model';

@Component({
  selector: 'app-berita-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './berita-admin.component.html',
  styleUrl: './berita-admin.component.css'
})
export class BeritaAdminComponent implements OnInit {
  beritaList: Berita[] = [];

  constructor(private beritaService: BeritaService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.beritaService.getAll().subscribe({
      next: (data) => this.beritaList = data,
      error: (e) => console.error(e)
    });
  }

 hapusData(id: number | undefined): void {
    // 1. CEK ID DI CONSOLE
    console.log('Tombol hapus diklik. ID yang diterima:', id);

    if (!id) {
      alert('Error: ID Berita tidak ditemukan (undefined)!');
      return;
    }

    if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      this.beritaService.delete(id).subscribe({
        next: () => {
          console.log('Berhasil hapus di backend.');
          alert('Berita berhasil dihapus!');
          this.fetchData(); // Refresh tabel
        },
        error: (e) => {
          console.error('Gagal menghapus:', e);
          // Tampilkan pesan error detail biar tau kenapa
          alert('Gagal menghapus! Cek Console Browser (F12) untuk detail error.');
        }
      });
    }
  }
}
