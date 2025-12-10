import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { Admin } from '../../../models/admin.model';

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent implements OnInit {
  adminList: Admin[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.adminService.getAll().subscribe({
      next: (data) => this.adminList = data,
      error: (e) => console.error(e)
    });
  }

  hapusAdmin(id: number): void {
    if (confirm('Yakin ingin menghapus Admin ini?')) {
      this.adminService.delete(id).subscribe({
        next: () => {
          alert('Admin berhasil dihapus!');
          this.fetchData();
        },
        error: (e) => alert('Gagal menghapus admin (Mungkin Super Admin tidak bisa dihapus).')
      });
    }
  }
}
