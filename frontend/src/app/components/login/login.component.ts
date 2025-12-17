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
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  // === TAMBAHAN BARU UNTUK PASSWORD ===
  showPassword: boolean = false; // Defaultnya sembunyi (false)

  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  // === FUNGSI BARU UNTUK MENGUBAH STATUS PASSWORD ===
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Username dan Password wajib diisi!';
      setTimeout(() => this.errorMessage = '', 3000);
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const loginPayload = {
      username: this.username,
      password: this.password
    };

    this.authService.login(loginPayload).subscribe({
      next: (response) => {
        console.log('Login Berhasil:', response);
        localStorage.setItem('admin', JSON.stringify(response));
        this.authService.saveAdmin(response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login Gagal:', error);
        this.isLoading = false;

        if (error.status === 401 || error.status === 404) {
             this.errorMessage = 'Username atau Password salah.';
        } else {
             this.errorMessage = 'Terjadi kesalahan server. Coba lagi nanti.';
        }
      }
    });
  }
}
