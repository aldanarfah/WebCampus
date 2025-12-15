import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Berita } from '../models/berita.model';

@Injectable({
  providedIn: 'root'
})
export class BeritaService {
  // Pastikan URL ini sesuai dengan Controller Spring Boot Anda
  private baseUrl = 'http://localhost:8080/api/berita';

  constructor(private http: HttpClient) { }

  // Ambil SEMUA Berita
  getAll(): Observable<Berita[]> {
    return this.http.get<Berita[]>(this.baseUrl);
  }

  // Ambil Detail Berita per ID
  get(id: number): Observable<Berita> {
    return this.http.get<Berita>(`${this.baseUrl}/${id}`);
  }

  // --- [TAMBAHAN PENTING] ---
  // Ambil Berita Spesifik milik Organisasi tertentu
  // Endpoint ini harus ada di Backend: @GetMapping("/organisasi/{id}")
  getBeritaByOrganisasiId(idOrganisasi: number): Observable<Berita[]> {
    return this.http.get<Berita[]>(`${this.baseUrl}/organisasi/${idOrganisasi}`);
  }
  // --------------------------

  // Create Berita (Pakai FormData untuk upload gambar)
  create(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // Update Berita
  update(id: number, data: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // Hapus Berita
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
