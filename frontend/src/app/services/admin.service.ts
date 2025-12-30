import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // Sesuaikan URL ini dengan port backend Springboot kamu
  private apiUrl = 'http://localhost:8080/api/admin'; 

  constructor(private http: HttpClient) { }

  // 1. Method untuk Ambil Semua Data (findAllAdmin)
  findAllAdmin(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // 2. Method untuk Hapus Data (deleteAdmin)
  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // 3. Method Create (Dipakai di tambah-admin nanti)
  createAdmin(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  
  // 4. Method Get By ID (Opsional)
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}