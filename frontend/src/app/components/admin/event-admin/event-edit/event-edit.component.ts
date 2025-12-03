import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventService } from '../../../../services/event.service';
import { Event } from '../../../../models/event.model';

@Component({
  selector: 'app-event-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './event-edit.component.html',
  styleUrl: './event-edit.component.css'
})
export class EventEditComponent implements OnInit {

  event: Event = {
    namaEvent: '',
    deskripsi: '',
    lokasi: '',
    tanggalMulai: '',
    tanggalSelesai: '',
    status: 'akan datang',
    dibuatOleh: { idAdmin: 1 }
  };

  id!: number;
  selectedFile: File | null = null;
  previewUrl: any = null;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1. Ambil ID dari URL
    this.id = this.route.snapshot.params['id'];

    // 2. Ambil data lama dari database
    this.eventService.get(this.id).subscribe({
      next: (data) => {
        this.event = data;
        // Tampilkan gambar lama jika ada
        if (data.gambarEvent) {
          this.previewUrl = 'http://localhost:8080/api/files/download/' + data.gambarEvent;
        }
      },
      error: (e) => console.error('Gagal ambil data:', e)
    });
  }

  // Handle saat user pilih file baru
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => this.previewUrl = e.target?.result;
      reader.readAsDataURL(file);
    }
  }

  // Fungsi Update Utama
  updateEvent(): void {
    // 1. Validasi Anti Spasi
    if (!this.event.namaEvent.trim() || !this.event.lokasi.trim() || !this.event.deskripsi.trim()) {
      alert('Data tidak boleh kosong atau hanya spasi!');
      return;
    }

    // 2. Cek apakah user mengganti gambar?
    if (this.selectedFile) {
      // Jika Ada file baru -> Upload dulu
      this.eventService.uploadImage(this.selectedFile).subscribe({
        next: (res) => {
          this.event.gambarEvent = res.fileName; // Update nama file
          this.executeSave(); // Lanjut simpan data
        },
        error: () => alert('Gagal upload gambar!')
      });
    } else {
      // Jika Tidak ganti gambar -> Langsung simpan data
      this.executeSave();
    }
  }

  // Helper Simpan ke Database
  executeSave(): void {
    this.eventService.update(this.id, this.event).subscribe({
      next: () => {
        alert('Event berhasil diperbarui!');
        this.router.navigate(['/dashboard/event']);
      },
      error: (e) => {
        console.error(e);
        alert('Gagal update event.');
      }
    });
  }
}
