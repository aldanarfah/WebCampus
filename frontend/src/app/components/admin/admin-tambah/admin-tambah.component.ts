import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { Admin } from '../../../models/admin.model';

@Component({
  selector: 'app-admin-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-tambah.component.html',
  styleUrl: './admin-tambah.component.css'
})
export class AdminTambahComponent {

  admin: Admin = {
    namaAdmin: '',
    username: '',
    password: '',
    email: ''
  };

  constructor(private adminService: AdminService, private router: Router) {}

  saveAdmin(): void {
    if (!this.admin.namaAdmin || !this.admin.username || !this.admin.password) {
      alert('Nama, Username, dan Password wajib diisi!');
      return;
    }

    this.adminService.create(this.admin).subscribe({
      next: () => {
        alert('Admin baru berhasil ditambahkan!');
        this.router.navigate(['/dashboard/users']);
      },
      error: (e) => {
        console.error(e);
        alert('Gagal menambah admin. Username mungkin sudah dipakai.');
      }
    });
  }
}
