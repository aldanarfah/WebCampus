import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8080/api/event';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl);
  }

  get(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/${id}`);
  }

  // --- [TAMBAHAN PENTING] ---
  // Endpoint ini harus ada di Backend EventController: @GetMapping("/organisasi/{id}")
  getEventByOrganisasiId(idOrganisasi: number): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/organisasi/${idOrganisasi}`);
  }
  // --------------------------

  create(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: number, data: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
