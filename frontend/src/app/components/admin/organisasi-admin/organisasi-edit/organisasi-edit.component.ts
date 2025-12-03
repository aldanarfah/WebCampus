import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OrganisasiService } from '../../../../services/organisasi.service';
import { Organisasi } from '../../../../models/organisasi.model';

@Component({
  selector: 'app-organisasi-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './organisasi-edit.component.html',
  styleUrl: './organisasi-edit.component.css'
})
export class OrganisasiEditComponent implements OnInit {

  organisasi: Organisasi = {
    namaOrganisasi: '',
    deskripsi: '',
    ketua: '',
    periode: '',
    status: 'aktif'
  };

  id!: number;

  constructor(
    private organisasiService: OrganisasiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.organisasiService.get(this.id).subscribe({
      next: (data) => this.organisasi = data,
      error: (e) => console.error(e)
    });
  }

  updateOrganisasi(): void {
    // Validasi Manual: Cek spasi kosong
    if (!this.organisasi.namaOrganisasi.trim() ||
        !this.organisasi.deskripsi.trim() ||
        !this.organisasi.ketua.trim()) {
      alert('Data tidak boleh kosong atau hanya berisi spasi!');
      return;
    }

    this.organisasiService.update(this.id, this.organisasi).subscribe({
      next: (res) => {
        alert('Data berhasil diperbarui!');
        this.router.navigate(['/dashboard/organisasi']);
      },
      error: (e) => console.error(e)
    });
  }
}
