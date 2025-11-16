import { Component } from '@angular/core';

interface Organisasi {
  id: number;
  nama: string;
  deskripsi: string;
}

@Component({
  selector: 'app-organisasi-admin',
  templateUrl: './organisasi-admin.component.html',
  styleUrls: ['./organisasi-admin.component.css']
})
export class OrganisasiAdminComponent {

  organisasiList: Organisasi[] = [
    { id: 1, nama: 'BEM', deskripsi: 'Badan Eksekutif Mahasiswa' },
    { id: 2, nama: 'DPM', deskripsi: 'Dewan Perwakilan Mahasiswa' },
  ];

  nextId = 3;

  showAddForm() {
    const nama = prompt('Masukkan nama organisasi:');
    const deskripsi = prompt('Masukkan deskripsi:');

    if (nama && deskripsi) {
      this.organisasiList.push({
        id: this.nextId++,
        nama,
        deskripsi
      });
    }
  }

  edit(org: Organisasi) {
    const nama = prompt('Edit nama:', org.nama);
    const deskripsi = prompt('Edit deskripsi:', org.deskripsi);

    if (nama && deskripsi) {
      org.nama = nama;
      org.deskripsi = deskripsi;
    }
  }

  delete(id: number) {
    if (confirm('Yakin hapus?')) {
      this.organisasiList = this.organisasiList.filter(o => o.id !== id);
    }
  }
}
