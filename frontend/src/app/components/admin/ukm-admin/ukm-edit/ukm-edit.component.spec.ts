import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UkmService } from '../../../../services/ukm.service';
import { Ukm } from '../../../../models/ukm.model';

@Component({
  selector: 'app-ukm-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ukm-edit.component.html',
  styleUrl: './ukm-edit.component.css'
})
export class UkmEditComponent implements OnInit {

  ukm: Ukm = {
    namaUkm: '',
    deskripsi: '',
    ketua: '',
    periode: '',
    status: 'aktif'
  };

  id!: number;

  constructor(
    private ukmService: UkmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1. Ambil ID dari URL
    this.id = this.route.snapshot.params['id'];

    // 2. Ambil Data Lama
    this.ukmService.get(this.id).subscribe({
      next: (data) => this.ukm = data,
      error: (e) => console.error(e)
    });
  }

  updateUkm(): void {
    // 3. Simpan Perubahan
    this.ukmService.update(this.id, this.ukm).subscribe({
      next: (res) => {
        alert('Data UKM berhasil diperbarui!');
        this.router.navigate(['/dashboard/ukm']);
      },
      error: (e) => console.error(e)
    });
  }
}
