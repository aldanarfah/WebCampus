import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-berita-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './berita-admin.component.html',
})
export class BeritaAdminComponent {
  
  beritaList = [
    { id: 1, judul: 'Wisuda 2025', isi: 'Pelaksanaan wisuda dilakukan...' },
    { id: 2, judul: 'Lomba Inovasi', isi: 'Mahasiswa memenangkan lomba...' }
  ];

  form = { id: 0, judul: '', isi: '' };
  mode: 'create' | 'edit' = 'create';

  save() {
    if (this.mode === 'create') {
      this.beritaList.push({ ...this.form, id: Date.now() });
    } else {
      const i = this.beritaList.findIndex(b => b.id === this.form.id);
      this.beritaList[i] = { ...this.form };
    }
    this.reset();
  }

  edit(data: any) {
    this.form = { ...data };
    this.mode = 'edit';
  }

  delete(id: number) {
    this.beritaList = this.beritaList.filter(b => b.id !== id);
  }

  reset() {
    this.form = { id: 0, judul: '', isi: '' };
    this.mode = 'create';
  }
}
