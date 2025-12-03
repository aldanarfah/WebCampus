import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-admin.component.html',
  styleUrl: './event-admin.component.css'
})
export class EventAdminComponent implements OnInit {
  eventList: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.eventService.getAll().subscribe({
      next: (data) => this.eventList = data,
      error: (e) => console.error('Gagal ambil data:', e)
    });
  }

  hapusData(id: number): void {
    if (confirm('Yakin ingin menghapus event ini?')) {
      this.eventService.delete(id).subscribe({
        next: () => {
          alert('Event berhasil dihapus!');
          this.fetchData(); // Refresh tabel
        },
        error: (e) => console.error('Gagal hapus:', e)
      });
    }
  }
}
