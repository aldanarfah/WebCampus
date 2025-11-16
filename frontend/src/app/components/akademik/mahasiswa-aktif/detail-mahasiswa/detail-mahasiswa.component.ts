import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-mahasiswa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-mahasiswa.component.html'
})
export class DetailMahasiswaComponent {
  @Input() mahasiswa: any;
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
