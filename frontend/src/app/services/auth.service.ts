import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Arahkan ke endpoint login Spring Boot yang baru kita buat
  private apiUrl = 'http://localhost:8080/api/admin/login';

  constructor(private http: HttpClient, private router: Router) { }

  // 1. Fungsi Login ke Backend
  login(data: any): Observable<any> {
    // Mengirim { username: '...', password: '...' } ke backend
    return this.http.post(this.apiUrl, data);
  }

  // 2. Simpan data admin yang sedang login di Browser (LocalStorage)
  saveAdmin(adminData: any): void {
    localStorage.setItem('currentAdmin', JSON.stringify(adminData));
  }

  // 3. Cek apakah ada admin yang sedang login?
  isLoggedIn(): boolean {
    return localStorage.getItem('currentAdmin') !== null;
  }

  // 4. Ambil data admin (untuk ditampilkan nama di dashboard nanti)
  getCurrentAdmin(): any {
    const data = localStorage.getItem('currentAdmin');
    return data ? JSON.parse(data) : null;
  }

  // 5. Logout
  logout(): void {
    localStorage.removeItem('currentAdmin');
    this.router.navigate(['/login']);
  }
}
