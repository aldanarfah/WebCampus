import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ukm } from '../models/ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmService {
  private baseUrl = 'http://localhost:8080/api/ukm';
  
  // URL untuk Berita & Event
  private beritaUrl = 'http://localhost:8080/api/berita';
  private eventUrl = 'http://localhost:8080/api/event';

  constructor(private http: HttpClient) { }

  // 1. UNTUK ADMIN (Dapat semua data)
  getAll(): Observable<Ukm[]> {
    return this.http.get<Ukm[]>(this.baseUrl);
  }

  // 2. UNTUK PUBLIC
  getAllPublic(): Observable<Ukm[]> {
    return this.http.get<Ukm[]>(`${this.baseUrl}/public`);
  }

  get(id: number): Observable<Ukm> {
    return this.http.get<Ukm>(`${this.baseUrl}/${id}`);
  }

  create(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: number, data: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // === INTEGRASI BARU: AMBIL BERITA & EVENT MILIK UKM ===
  
  // Panggil endpoint: /api/berita/ukm/{id}
  getBeritaByUkm(idUkm: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.beritaUrl}/ukm/${idUkm}`);
  }

  // Panggil endpoint: /api/event/ukm/{id}
  getEventByUkm(idUkm: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.eventUrl}/ukm/${idUkm}`);
  }
}