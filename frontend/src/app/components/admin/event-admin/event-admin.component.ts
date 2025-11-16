import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-admin.component.html',
})
export class EventAdminComponent {

  eventList = [
    { id: 1, nama: 'Seminar AI', tanggal: '2025-01-20' },
    { id: 2, nama: 'Expo Kampus', tanggal: '2025-02-10' }
  ];

  form = { id: 0, nama: '', tanggal: '' };
  mode: 'create' | 'edit' = 'create';

  save() {
    if (this.mode === 'create') {
      this.eventList.push({ ...this.form, id: Date.now() });
    } else {
      const idx = this.eventList.findIndex(e => e.id === this.form.id);
      this.eventList[idx] = { ...this.form };
    }
    this.reset();
  }

  edit(e: any) {
    this.form = { ...e };
    this.mode = 'edit';
  }

  delete(id: number) {
    this.eventList = this.eventList.filter(e => e.id !== id);
  }

  reset() {
    this.form = { id: 0, nama: '', tanggal: '' };
    this.mode = 'create';
  }
}
