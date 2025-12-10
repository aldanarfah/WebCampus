import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ukm } from '../models/ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmService {
  private baseUrl = 'http://localhost:8080/api/ukm'; // Pastikan port 8080

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ukm[]> {
    return this.http.get<Ukm[]>(this.baseUrl);
  }

  get(id: number): Observable<Ukm> {
    return this.http.get<Ukm>(`${this.baseUrl}/${id}`);
  }

  // UBAH JADI FormData
  create(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // UBAH JADI FormData
  update(id: number, data: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
