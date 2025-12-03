import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8080/api/event';
  private uploadUrl = 'http://localhost:8080/api/files/upload';

  constructor(private http: HttpClient) { }

  // GET ALL
  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl, { withCredentials: true });
  }

  // GET BY ID
  get(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  // CREATE
  create(data: Event): Observable<any> {
    return this.http.post(this.baseUrl, data, { withCredentials: true });
  }

  // UPDATE
  update(id: number, data: Event): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data, { withCredentials: true });
  }

  // DELETE
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  // UPLOAD GAMBAR
  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.uploadUrl, formData, { withCredentials: true });
  }
}
