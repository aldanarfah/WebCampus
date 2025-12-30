import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-tambah.component.html',
  styleUrl: './admin-tambah.component.css'
})
export class AdminTambahComponent {
  
  // Model data
  admin = {
    namaAdmin: '',
    username: '',
    password: '',
    email: ''
  };

  isLoading = false;
  errorMessage = '';

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  // PERBAIKAN: Saya ubah nama fungsi dari 'onSubmit' menjadi 'saveAdmin'
  // agar cocok dengan panggilan di HTML (ngSubmit)="saveAdmin()"
  saveAdmin(): void {
    this.isLoading = true;
    this.errorMessage = '';

    // Pastikan memanggil createAdmin (sesuai service yang sudah kita perbaiki)
    this.adminService.createAdmin(this.admin).subscribe({
      next: () => {
        alert('Admin berhasil ditambahkan!');
        this.isLoading = false;
        this.router.navigate(['/dashboard/users']);
      },
      error: (e: any) => {
        console.error(e);
        this.isLoading = false;
        this.errorMessage = e.error?.message || 'Gagal menambahkan admin.';
      }
    });
  }
}