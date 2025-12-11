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
  styleUrls: ['./ukm-admin.component.css']
})
export class UkmAdminComponent implements OnInit {

  ukmList: Ukm[] = [];
  isLoading: boolean = true;

  // URL untuk gambar
  imageBaseUrl = 'http://localhost:8080/uploads/';

  constructor(private ukmService: UkmService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.ukmService.getAll().subscribe({
      next: (data) => {
        this.ukmList = data;
        this.isLoading = false;
      },
      error: (e) => {
        console.error(e);
        this.isLoading = false;
      }
    });
  }

  hapusUkm(id: number | undefined): void {
    if (!id) return;
    if (confirm('Yakin ingin menghapus UKM ini?')) {
      this.ukmService.delete(id).subscribe({
        next: () => this.loadData(),
        error: (e) => console.error(e)
      });
    }
  }
}
