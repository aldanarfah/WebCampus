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
  styleUrls: ['./berita-admin.component.css']
})
export class BeritaAdminComponent implements OnInit {

  beritaList: Berita[] = [];
  isLoading: boolean = true;
  imageBaseUrl = 'http://localhost:8080/uploads/';

  constructor(private beritaService: BeritaService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.beritaService.getAll().subscribe({
      next: (data) => {
        this.beritaList = data;
        this.isLoading = false;
      },
      error: (e) => {
        console.error(e);
        this.isLoading = false;
      }
    });
  }

  hapusBerita(id: number | undefined): void {
    if (!id) return;
    if (confirm('Yakin ingin menghapus berita ini?')) {
      this.beritaService.delete(id).subscribe({
        next: () => this.loadData(),
        error: (e) => console.error(e)
      });
    }
  }

  // Helper untuk menampilkan nama pemilik berita
  getPemilik(berita: Berita): string {
    if (berita.organisasi) return 'Organisasi: ' + berita.organisasi.namaOrganisasi;
    if (berita.ukm) return 'UKM: ' + berita.ukm.namaUkm;
    return 'Umum (Kampus)';
  }
}
