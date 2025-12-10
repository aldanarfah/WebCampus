import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organisasi } from '../models/organisasi.model';

@Injectable({
  providedIn: 'root'
})
export class OrganisasiService {
  // Pastikan port sesuai backend kamu
  private baseUrl = 'http://localhost:8080/api/organisasi';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Organisasi[]> {
    return this.http.get<Organisasi[]>(this.baseUrl);
  }

  get(id: number): Observable<Organisasi> {
    return this.http.get<Organisasi>(`${this.baseUrl}/${id}`);
  }

  // UBAH DISINI: Parameter sekarang FormData
  create(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // UBAH DISINI: Parameter sekarang FormData
  update(id: number, data: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}