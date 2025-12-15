import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organisasi } from '../models/organisasi.model';

@Injectable({
  providedIn: 'root'
})
export class OrganisasiService {
  // Base URL Backend
  private baseUrl = 'http://localhost:8080/api/organisasi';
  private beritaUrl = 'http://localhost:8080/api/berita';
  private eventUrl = 'http://localhost:8080/api/event';

  constructor(private http: HttpClient) { }

  // 1. UNTUK ADMIN (Dapat semua data)
  getAll(): Observable<Organisasi[]> {
    return this.http.get<Organisasi[]>(this.baseUrl);
  }

  // 2. UNTUK PUBLIC
  getAllPublic(): Observable<Organisasi[]> {
    return this.http.get<Organisasi[]>(`${this.baseUrl}/public`);
  }

  get(id: number): Observable<Organisasi> {
    return this.http.get<Organisasi>(`${this.baseUrl}/${id}`);
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

  // === INTEGRASI BARU: AMBIL BERITA & EVENT BERDASARKAN ID ORGANISASI ===
  
  getBeritaByOrganisasi(idOrganisasi: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.beritaUrl}/organisasi/${idOrganisasi}`);
  }

  getEventByOrganisasi(idOrganisasi: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.eventUrl}/organisasi/${idOrganisasi}`);
  }
}