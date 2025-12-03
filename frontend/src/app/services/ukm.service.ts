import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ukm } from '../models/ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmService {
  // Arahkan ke endpoint UKM di Spring Boot
  private baseUrl = 'http://localhost:8080/api/ukm';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ukm[]> {
    return this.http.get<Ukm[]>(this.baseUrl, { withCredentials: true });
  }

  get(id: number): Observable<Ukm> {
    return this.http.get<Ukm>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  create(data: Ukm): Observable<any> {
    return this.http.post(this.baseUrl, data, { withCredentials: true });
  }

  update(id: number, data: Ukm): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data, { withCredentials: true });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
  }
}
