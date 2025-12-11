import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Berita } from '../models/berita.model';

@Injectable({
  providedIn: 'root'
})
export class BeritaService {
  private baseUrl = 'http://localhost:8080/api/berita';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Berita[]> {
    return this.http.get<Berita[]>(this.baseUrl);
  }

  get(id: number): Observable<Berita> {
    return this.http.get<Berita>(`${this.baseUrl}/${id}`);
  }

  // Pakai FormData
  create(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // Pakai FormData
  update(id: number, data: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
