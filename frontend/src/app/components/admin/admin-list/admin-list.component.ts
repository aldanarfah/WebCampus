import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../../services/admin.service'; // Pastikan path ini benar
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule], // Tambah HttpClientModule biar aman
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent implements OnInit {
  
  adminList: any[] = []; 

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // Nama fungsi sekarang sudah cocok dengan Service
    this.adminService.findAllAdmin().subscribe({
      // PERBAIKAN: Tambahkan ': any' agar TypeScript tidak error
      next: (data: any) => {
        this.adminList = data;
        console.log('Data Admin:', data);
      },
      // PERBAIKAN: Tambahkan ': any'
      error: (e: any) => console.error('Gagal ambil data:', e)
    });
  }

  deleteAdmin(id: number): void {
    if (confirm('Yakin ingin menghapus Admin ini?')) {
      // Nama fungsi sudah cocok dengan Service
      this.adminService.deleteAdmin(id).subscribe({
        next: () => {
          alert('Admin berhasil dihapus!');
          this.fetchData(); 
        },
        // PERBAIKAN: Tambahkan ': any'
        error: (error: any) => {
          console.error(error);
          const pesan = error.error?.message || 'Gagal menghapus admin (Mungkin Super Admin).';
          alert(pesan);
        }
      });
    }
  }
}