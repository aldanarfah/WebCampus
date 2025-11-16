import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Lowongan {
  posisi: string;
  perusahaan: string;
  lokasi: string;
  tanggal: string;
  poster: string;
  deskripsi: string;
}

@Component({
  selector: 'app-detail-karier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-karier.component.html',
  styleUrls: ['./detail-karier.component.css']
})
export class DetailKarierComponent {
  @Input() lowongan!: Lowongan | null;   // Data lowongan yang akan ditampilkan
  @Output() close = new EventEmitter<void>();  // Event untuk menutup modal

  onClose() {
    this.close.emit();
  }
}
