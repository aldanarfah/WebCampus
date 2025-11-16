import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ukm-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ukm-admin.component.html',
  styleUrls: ['./ukm-admin.component.css']
})
export class UkmAdminComponent {

  ukmList = [
    { id: 1, nama: 'UKM Musik', deskripsi: 'Unit kegiatan seni musik' },
    { id: 2, nama: 'UKM Olahraga', deskripsi: 'Unit kegiatan olahraga mahasiswa' }
  ];

  form = { id: 0, nama: '', deskripsi: '' };
  mode: 'create' | 'edit' = 'create';

  save() {
    if (this.mode === 'create') {
      this.ukmList.push({ ...this.form, id: Date.now() });
    } else {
      const idx = this.ukmList.findIndex(u => u.id === this.form.id);
      this.ukmList[idx] = { ...this.form };
    }

    this.resetForm();
  }

  edit(data: any) {
    this.form = { ...data };
    this.mode = 'edit';
  }

  delete(id: number) {
    this.ukmList = this.ukmList.filter(u => u.id !== id);
  }

  resetForm() {
    this.form = { id: 0, nama: '', deskripsi: '' };
    this.mode = 'create';
  }
}
