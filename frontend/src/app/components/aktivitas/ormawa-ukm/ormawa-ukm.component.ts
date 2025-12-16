import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrganisasiService } from '../../../services/organisasi.service';
import { UkmService } from '../../../services/ukm.service';
import { Organisasi } from '../../../models/organisasi.model';
import { Ukm } from '../../../models/ukm.model';

@Component({
  selector: 'app-ormawa-ukm',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ormawa-ukm.component.html',
  styleUrl: './ormawa-ukm.component.css'
})
export class OrmawaUkmComponent implements OnInit {

  listOrganisasi: Organisasi[] = [];
  listUkm: Ukm[] = [];

  imageBaseUrl = 'http://localhost:8080/api/files/';

  constructor(
    private organisasiService: OrganisasiService,
    private ukmService: UkmService
  ) {}

  ngOnInit(): void {
    this.getOrganisasiData();
    this.getUkmData();
  }

  getOrganisasiData() {
    // [UPDATE] Gunakan getAllPublic() agar hanya yang AKTIF yang muncul
    this.organisasiService.getAllPublic().subscribe({
      next: (data: Organisasi[]) => {
        this.listOrganisasi = data;
        console.log('Data Organisasi Public:', data);
      },
      error: (err: any) => console.error('Gagal ambil organisasi:', err)
    });
  }

  getUkmData() {
    // [UPDATE] Gunakan getAllPublic() agar UKM nonaktif tidak muncul
    this.ukmService.getAllPublic().subscribe({
      next: (data: Ukm[]) => {
        this.listUkm = data;
        console.log('Data UKM Public:', data);
      },
      error: (err: any) => console.error('Gagal ambil UKM:', err)
    });
  }
}
