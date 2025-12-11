import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model'; // Pastikan path model benar

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // Arahkan ke Backend Spring Boot
  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) { }

  // 1. Ambil Semua Admin
  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl, { withCredentials: true });
  }

  // 2. Tambah Admin Baru
  create(data: Admin): Observable<any> {
    return this.http.post(this.baseUrl, data, { withCredentials: true });
  }

  // 3. Hapus Admin
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
  }
}
