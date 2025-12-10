import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrganisasiService } from '../../../services/organisasi.service';
import { Organisasi } from '../../../models/organisasi.model';

@Component({
  selector: 'app-organisasi-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './organisasi-admin.component.html',
  styleUrls: ['./organisasi-admin.component.css']
})
export class OrganisasiAdminComponent implements OnInit {

  organisasiList: Organisasi[] = [];
  isLoading: boolean = true;

  // ✨ TAMBAHKAN BARIS INI (PENTING) ✨
  imageBaseUrl = 'http://localhost:8080/uploads/';

  constructor(private organisasiService: OrganisasiService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.organisasiService.getAll().subscribe({
      next: (data) => {
        this.organisasiList = data;
        this.isLoading = false;
      },
      error: (e) => {
        console.error(e);
        this.isLoading = false;
      }
    });
  }

  hapusOrganisasi(id: number | undefined): void {
    if (!id) return;
    if (confirm('Yakin ingin menghapus?')) {
      this.organisasiService.delete(id).subscribe({
        next: () => this.loadData(),
        error: (e) => console.error(e)
      });
    }
  }
}