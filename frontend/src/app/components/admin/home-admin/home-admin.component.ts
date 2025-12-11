import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import 'DashboardStats' agar Angular tau format data baru
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent implements OnInit {

  // GANTI INI: DashboardStats tidak diekspor dari service, gunakan tipe lokal sementara
  stats: any | null = null;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.dashboardService.getStats().subscribe({
      next: (data) => {
        this.stats = data; // Data masuk: organisasiAktif, organisasiTerhapus, dll
        console.log('Stats loaded:', data);
      },
      error: (e) => console.error('Gagal memuat statistik:', e)
    });
  }
}
