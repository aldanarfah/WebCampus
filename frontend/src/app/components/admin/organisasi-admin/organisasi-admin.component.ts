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

  constructor(private organisasiService: OrganisasiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.organisasiService.getAll().subscribe({
      next: (data) => {
        this.organisasiList = data;
        console.log('Data berhasil diambil:', data);
      },
      error: (e) => console.error('Error fetching data:', e)
    });
  }

  hapusData(id: number): void {
    if (confirm('Apakah Anda yakin ingin menghapus data organisasi ini?')) {
      this.organisasiService.delete(id).subscribe({
        next: (res) => {
          alert('Data berhasil dihapus!');
          this.fetchData();
        },
        error: (e) => console.error(e)
      });
    }
  }
}
