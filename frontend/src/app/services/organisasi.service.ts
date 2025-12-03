import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organisasi } from '../models/organisasi.model';

@Injectable({
  providedIn: 'root'
})
export class OrganisasiService {
  // Pastikan port benar
  private baseUrl = 'http://localhost:8080/api/organisasi';

  // HANYA inject HttpClient. JANGAN inject OrganisasiService disini.
  constructor(private http: HttpClient) { }

  getAll(): Observable<Organisasi[]> {
    return this.http.get<Organisasi[]>(this.baseUrl, { withCredentials: true });
  }

  get(id: number): Observable<Organisasi> {
    return this.http.get<Organisasi>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  create(data: Organisasi): Observable<any> {
    return this.http.post(this.baseUrl, data, { withCredentials: true });
  }

  update(id: number, data: Organisasi): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data, { withCredentials: true });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
  }
}
