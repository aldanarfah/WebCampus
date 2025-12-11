import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' // Pastikan nama file css sesuai (styleUrl atau styleUrls)
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  };

  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    // Cek login status (opsional, tergantung logic authService Anda)
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onLogin(): void {
    if (!this.loginData.username || !this.loginData.password) {
      this.errorMessage = 'Username dan Password wajib diisi!';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login Berhasil, Data dari Backend:', response);

        // -----------------------------------------------------------
        // 1. FIX PENTING: SIMPAN MANUAL KE LOCAL STORAGE
        // Kita simpan respons (data admin) dengan kunci 'admin'
        // agar EventTambahComponent bisa membacanya.
        // -----------------------------------------------------------
        localStorage.setItem('admin', JSON.stringify(response));

        // Tetap panggil fungsi bawaan service (jika ada logic lain disana)
        this.authService.saveAdmin(response);

        // Redirect ke dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login Gagal:', error);
        this.isLoading = false;
        this.errorMessage = 'Username atau Password salah!';
      }
    });
  }
}
