import { AlumniKarirComponent } from './components/alumni-karir/alumni-karir.component';
import { Routes } from '@angular/router';

// Home
import { HomeComponent } from './components/home/home.component';

// Profil
import { ProfilComponent } from './components/profil/profil/profil.component';
import { ProfilHomeComponent } from './components/profil/profil-home/profil-home.component';
import { SejarahComponent } from './components/profil/sejarah/sejarah.component';
import { VisiMisiComponent } from './components/profil/visi-misi/visi-misi.component';
import { StrukturOrganisasiComponent } from './components/profil/struktur-organisasi/struktur-organisasi.component';
import { SaranaComponent } from './components/profil/sarana/sarana.component';



// Akademik
import { AkademikComponent } from './components/akademik/akademik/akademik.component';
import { AkademikHomeComponent } from './components/akademik/akademik-home/akademik-home.component';
import { KurikulumComponent } from './components/akademik/kurikulum/kurikulum.component';
import { DataDosenComponent } from './components/akademik/data-dosen/data-dosen.component';
import { MahasiswaAktifComponent } from './components/akademik/mahasiswa-aktif/mahasiswa-aktif.component';
import { JadwalComponent } from './components/akademik/jadwal/jadwal.component';

import { TIComponent } from './components/akademik/data-prodi/ti/ti.component';
import { SipilComponent } from './components/akademik/data-prodi/sipil/sipil.component';
import { TROComponent } from './components/akademik/data-prodi/tro/tro.component';
import { AkuntansiComponent } from './components/akademik/data-prodi/akuntansi/akuntansi.component';


// Alumni
import { AlumniKarirComponent as AlumniKarirHomeComponent } from './components/alumni-karir/alumni-karir.component';
import { KegiatanAlumniComponent } from './components/alumni-karir/kegiatan-alumni/kegiatan-alumni.component';
import { DetailKegiatanComponent } from './components/alumni-karir/kegiatan-alumni/detail-kegiatan/detail-kegiatan.component';


import { KataAlumniComponent } from './components/alumni-karir/kata-alumni/kata-alumni.component';
import { DetailKataComponent } from './components/alumni-karir/kata-alumni/detail-kata/detail-kata.component';

import { LokerComponent } from './components/alumni-karir/loker/loker.component';
import { DetailLokerComponent } from './components/alumni-karir/loker/detail-loker/detail-loker.component';


// PMB
import { PmbComponent } from './components/pmb/pmb/pmb.component';
import { BeasiswaComponent } from './components/pmb/beasiswa/beasiswa.component';

//Kontak
import { KontakComponent } from './components/kontak/kontak.component';

// Login
import { LoginComponent } from './components/login/login.component';

// --- IMPORT DASHBOARD & ADMIN (INI YANG HILANG) ---
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { adminGuard } from './guards/admin.guard';

// Manajemen User (Admin)
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AdminTambahComponent } from './components/admin/admin-tambah/admin-tambah.component';

// Organisasi
import { OrganisasiAdminComponent } from './components/admin/organisasi-admin/organisasi-admin.component';
import { OrganisasiTambahComponent } from './components/admin/organisasi-admin/organisasi-tambah/organisasi-tambah.component';
import { OrganisasiEditComponent } from './components/admin/organisasi-admin/organisasi-edit/organisasi-edit.component';

// UKM
import { UkmAdminComponent } from './components/admin/ukm-admin/ukm-admin.component';
import { UkmTambahComponent } from './components/admin/ukm-admin/ukm-tambah/ukm-tambah.component';
import { UkmEditComponent } from './components/admin/ukm-admin/ukm-edit/ukm-edit.component';

// Berita
import { BeritaAdminComponent } from './components/admin/berita-admin/berita-admin.component';
import { BeritaTambahComponent } from './components/admin/berita-admin/berita-tambah/berita-tambah.component';
import { BeritaEditComponent } from './components/admin/berita-admin/berita-edit/berita-edit.component';

// Event
import { EventAdminComponent } from './components/admin/event-admin/event-admin.component';
import { EventTambahComponent } from './components/admin/event-admin/event-tambah/event-tambah.component';
import { EventEditComponent } from './components/admin/event-admin/event-edit/event-edit.component';
// ----------------------------------------------------

// ... (Biarkan import lainnya seperti Home, Profil, dll tetap ada) ...


export const routes: Routes = [
  { path: '', component: HomeComponent },

  // Profil
  {
  path: 'profil',
  component: ProfilComponent,
  children: [
    { path: '', component: ProfilHomeComponent }, // default
    { path: 'sejarah', component: SejarahComponent },
    { path: 'visi-misi', component: VisiMisiComponent },
    { path: 'struktur-organisasi', component: StrukturOrganisasiComponent },
    { path: 'sarana', component: SaranaComponent }
  ]
},

  // Akademik
  {
  path: 'akademik',
  component: AkademikComponent,
  children: [
    { path: '', component: AkademikHomeComponent },

    // langsung masuk ke TI
    { path: 'data-prodi', redirectTo: 'data-prodi/ti', pathMatch: 'full' },

    // halaman prodi SADAR sendiri-sendiri
    { path: 'data-prodi/ti', component: TIComponent },
    { path: 'data-prodi/sipil', component: SipilComponent },
    { path: 'data-prodi/tro', component: TROComponent },
    { path: 'data-prodi/akuntansi', component: AkuntansiComponent },

    { path: 'kurikulum', component: KurikulumComponent },
    { path: 'data-dosen', component: DataDosenComponent },
    { path: 'mahasiswa-aktif', component: MahasiswaAktifComponent },
    { path: 'jadwal', component: JadwalComponent },
  ]
},


  // Login Admin
  { path: 'login', component: LoginComponent },

  // ADMIN DASHBOARD
  {
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [adminGuard],
  children: [
    { path: '', component: HomeAdminComponent },
    { path: '', component: HomeAdminComponent },
    { path: 'users', component: AdminListComponent },
    { path: 'users/tambah', component: AdminTambahComponent },

    { path: 'organisasi', component: OrganisasiAdminComponent },
    { path: 'organisasi/tambah', component: OrganisasiTambahComponent },
    { path: 'organisasi/edit/:id', component: OrganisasiEditComponent },

    { path: 'ukm', component: UkmAdminComponent },
    { path: 'ukm/tambah', component: UkmTambahComponent },
    { path: 'ukm/edit/:id', component: UkmEditComponent },

    { path: 'berita', component: BeritaAdminComponent },
    { path: 'berita/tambah', component: BeritaTambahComponent },
    { path: 'berita/edit/:id', component: BeritaEditComponent },

    { path: 'event', component: EventAdminComponent },
    { path: 'event/tambah', component: EventTambahComponent },
    { path: 'event/edit/:id', component: EventEditComponent },
  ],
},

  //Alumni-Karir
  {
  path: 'alumni-karir',
  component: AlumniKarirComponent,
  children: [
    { path: '', component: AlumniKarirHomeComponent }, // HOME

    // Kegiatan Alumni
    { path: 'kegiatan-alumni', component: KegiatanAlumniComponent },
    { path: 'kegiatan-alumni/:id', component: DetailKegiatanComponent },

    // Kata Alumni
    { path: 'kata-alumni', component: KataAlumniComponent },
    { path: 'kata-alumni/:id', component: DetailKataComponent },

    // Loker
    { path: 'loker', component: LokerComponent },
    { path: 'loker/:id', component: DetailLokerComponent },
  ]
},

 { path: 'pmb', component: PmbComponent },
{ path: 'pmb/beasiswa', component: BeasiswaComponent },


  //Kontak
  { path: 'kontak', component: KontakComponent },
];
