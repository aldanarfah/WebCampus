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
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent implements OnInit {

  eventList: Event[] = [];
  isLoading: boolean = true;
  imageBaseUrl = 'http://localhost:8080/uploads/';

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.eventService.getAll().subscribe({
      next: (data) => {
        this.eventList = data;
        this.isLoading = false;
      },
      error: (e) => {
        console.error(e);
        this.isLoading = false;
      }
    });
  }

  hapusEvent(id: number | undefined): void {
    if (!id) return;
    if (confirm('Yakin ingin menghapus event ini?')) {
      this.eventService.delete(id).subscribe({
        next: () => this.loadData(),
        error: (e) => console.error(e)
      });
    }
  }

  getPemilik(event: Event): string {
    if (event.organisasi) return 'Org: ' + event.organisasi.namaOrganisasi;
    if (event.ukm) return 'UKM: ' + event.ukm.namaUkm;
    return 'Umum';
  }
}
