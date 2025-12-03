import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Berita } from '../models/berita.model';

@Injectable({
  providedIn: 'root'
})
export class BeritaService {
  private baseUrl = 'http://localhost:8080/api/berita';
  private uploadUrl = 'http://localhost:8080/api/files/upload';

  constructor(private http: HttpClient) { }



  getAll(): Observable<Berita[]> {
    return this.http.get<Berita[]>(this.baseUrl, { withCredentials: true });
  }

  get(id: number): Observable<Berita> {
    return this.http.get<Berita>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  create(data: Berita): Observable<any> {
    return this.http.post(this.baseUrl, data, { withCredentials: true });
  }

  update(id: number, data: Berita): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data, { withCredentials: true });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  // Method Khusus Upload
  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    // Kirim sebagai FormData (bukan JSON)
    return this.http.post(this.uploadUrl, formData, { withCredentials: true });
  }
}

