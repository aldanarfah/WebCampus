import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UkmService } from '../../../services/ukm.service';
import { Ukm } from '../../../models/ukm.model';

@Component({
  selector: 'app-ukm-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ukm-admin.component.html',
  styleUrl: './ukm-admin.component.css'
})
export class UkmAdminComponent implements OnInit {

  ukmList: Ukm[] = [];

  constructor(private ukmService: UkmService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.ukmService.getAll().subscribe({
      next: (data) => this.ukmList = data,
      error: (e) => console.error(e)
    });
  }

  hapusData(id: number): void {
    if (confirm('Yakin ingin menghapus UKM ini?')) {
      this.ukmService.delete(id).subscribe({
        next: () => {
          alert('Data berhasil dihapus!');
          this.fetchData();
        },
        error: (e) => console.error(e)
      });
    }
  }
}