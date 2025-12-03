import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EventService } from '../../../../services/event.service';
import { Event } from '../../../../models/event.model';

@Component({
  selector: 'app-event-tambah',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './event-tambah.component.html',
  styleUrl: './event-tambah.component.css'
})
export class EventTambahComponent {

  event: Event = {
    namaEvent: '',
    deskripsi: '',
    lokasi: '',
    tanggalMulai: '',
    tanggalSelesai: '',
    gambarEvent: '',
    dibuatOleh: { idAdmin: 1 } // Default Admin
  };

  selectedFile: File | null = null;
  previewUrl: any = null;

  constructor(private eventService: EventService, private router: Router) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => this.previewUrl = e.target?.result;
      reader.readAsDataURL(file);
    }
  }

  saveEvent(): void {
    // Validasi Anti Spasi
    if (!this.event.namaEvent.trim() || !this.event.lokasi.trim() || !this.event.deskripsi.trim()) {
      alert('Semua kolom wajib diisi dan tidak boleh hanya spasi!');
      return;
    }

    if (this.selectedFile) {
      this.eventService.uploadImage(this.selectedFile).subscribe({
        next: (res) => {
          this.event.gambarEvent = res.fileName;
          this.executeSave();
        },
        error: () => alert('Gagal upload gambar!')
      });
    } else {
      this.executeSave();
    }
  }

  executeSave(): void {
    this.eventService.create(this.event).subscribe({
      next: () => {
        alert('Event berhasil ditambahkan!');
        this.router.navigate(['/dashboard/event']);
      },
      error: (e) => console.error(e)
    });
  }
}
