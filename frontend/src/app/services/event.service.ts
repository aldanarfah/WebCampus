import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // Pastikan port backend benar (8080)
  private baseUrl = 'http://localhost:8080/api/event';

  constructor(private http: HttpClient) { }

  // GET ALL
  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl);
  }

  // GET BY ID
  get(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/${id}`);
  }

  // CREATE (Menggunakan FormData untuk kirim File + Data)
  create(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // UPDATE (Menggunakan FormData untuk kirim File + Data)
  update(id: number, data: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // DELETE
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
