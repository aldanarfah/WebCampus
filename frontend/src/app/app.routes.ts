import { Routes } from '@angular/router';

// Home
import { HomeComponent } from './components/home/home.component';

// Profil
import { ProfilComponent } from './components/profil/profil/profil.component';
import { SejarahComponent } from './components/profil/sejarah/sejarah.component';
import { VisiMisiComponent } from './components/profil/visi-misi/visi-misi.component';
import { StrukturOrganisasiComponent } from './components/profil/struktur-organisasi/struktur-organisasi.component';
import { SaranaComponent } from './components/profil/sarana/sarana.component';

// Profil Default
import { ProfilDefaultComponent } from './components/profil/profil-default/profil-default.component';

// Akademik
import { AkademikComponent } from './components/akademik/akademik/akademik.component';
import { KurikulumComponent } from './components/akademik/kurikulum/kurikulum.component';
import { DataDosenComponent } from './components/akademik/data-dosen/data-dosen.component';
import { MahasiswaAktifComponent } from './components/akademik/mahasiswa-aktif/mahasiswa-aktif.component';
import { JadwalComponent } from './components/akademik/jadwal/jadwal.component';

// Akademik Default
import { AkademikDefaultComponent } from './components/akademik/akademik-default/akademik-default.component';

// Kemahasiswaan
import { AktivitasComponent } from './components/kemahasiswaan/aktivitas/aktivitas.component';
import { OrganisasiComponent } from './components/kemahasiswaan/organisasi/organisasi.component';
import { UkmComponent } from './components/kemahasiswaan/ukm/ukm.component';
import { BeritaComponent } from './components/kemahasiswaan/berita/berita.component';
import { EventComponent } from './components/kemahasiswaan/event/event.component';

// Aktivitas Default
import { AktivitasDefaultComponent } from './components/kemahasiswaan/aktivitas-default/aktivitas-default.component';

// Alumni
import { AlumniComponent } from './components/alumni/alumni/alumni.component';
import { DataAlumniComponent } from './components/alumni/data-alumni/data-alumni.component';
import { KegiatanAlumniComponent } from './components/alumni/kegiatan-alumni/kegiatan-alumni.component';

// Alumni Default
import { AlumniDefaultComponent } from './components/alumni/alumni-default/alumni-default.component';

// Karier
import { KarierComponent } from './components/karier/karier.component';

// PMB
import { PmbComponent } from './components/pmb/pmb/pmb.component';
import { BeasiswaComponent } from './components/pmb/beasiswa/beasiswa.component';

// PMB Default
import { PmbDefaultComponent } from './components/pmb/pmb-default/pmb-default.component';

//Kontak
import { KontakComponent } from './components/kontak/kontak.component';

// Login
import { LoginComponent } from './components/login/login.component';

// Admin Dashboard
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { adminGuard } from './guards/admin.guard';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AdminTambahComponent } from './components/admin/admin-tambah/admin-tambah.component';

import { OrganisasiAdminComponent } from './components/admin/organisasi-admin/organisasi-admin.component';
import { OrganisasiTambahComponent } from './components/admin/organisasi-admin/organisasi-tambah/organisasi-tambah.component';
import { OrganisasiEditComponent } from './components/admin/organisasi-admin/organisasi-edit/organisasi-edit.component';

import { UkmAdminComponent } from './components/admin/ukm-admin/ukm-admin.component';
import { UkmTambahComponent } from './components/admin/ukm-admin/ukm-tambah/ukm-tambah.component';
import { UkmEditComponent } from './components/admin/ukm-admin/ukm-edit/ukm-edit.component';
import { BeritaAdminComponent } from './components/admin/berita-admin/berita-admin.component';
import { BeritaTambahComponent } from './components/admin/berita-admin/berita-tambah/berita-tambah.component';
import { BeritaEditComponent } from './components/admin/berita-admin/berita-edit/berita-edit.component';

import { EventAdminComponent } from './components/admin/event-admin/event-admin.component';
import { EventTambahComponent } from './components/admin/event-admin/event-tambah/event-tambah.component';
import { EventEditComponent } from './components/admin/event-admin/event-edit/event-edit.component';

// Data Prodi (sub halaman)
import { ProdiLayoutComponent } from './components/akademik/data-prodi/prodi-layout/prodi-layout.component';
import { TIComponent } from './components/akademik/data-prodi/ti/ti.component';
import { SipilComponent } from './components/akademik/data-prodi/sipil/sipil.component';
import { TROComponent } from './components/akademik/data-prodi/tro/tro.component';
import { AkuntansiComponent } from './components/akademik/data-prodi/akuntansi/akuntansi.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },

  // Profil
  {
  path: 'profil',
  component: ProfilComponent,
  children: [
    { path: '', component: ProfilDefaultComponent }, // default
    { path: 'sejarah', component: SejarahComponent },
    { path: 'visi-misi', component: VisiMisiComponent },
    { path: 'struktur-organisasi', component: StrukturOrganisasiComponent },
    { path: 'sarana', component: SaranaComponent },
  ]
},

  // Akademik
  {
  path: 'akademik',
  component: AkademikComponent,
  children: [
    { path: '', component: AkademikDefaultComponent },
    { path: 'data-prodi', component: ProdiLayoutComponent, children: [
        { path: '', redirectTo: 'ti', pathMatch: 'full' },
        { path: 'ti', component: TIComponent },
        { path: 'sipil', component: SipilComponent },
        { path: 'tro', component: TROComponent },
        { path: 'akuntansi', component: AkuntansiComponent },
    ]},
    { path: 'kurikulum', component: KurikulumComponent },
    { path: 'data-dosen', component: DataDosenComponent },
    { path: 'mahasiswa-aktif', component: MahasiswaAktifComponent },
    { path: 'jadwal', component: JadwalComponent }, // <--- child route
  ]
},

  {
    path: 'kemahasiswaan', // Ganti 'aktivitas' jadi 'kemahasiswaan' di URL
    component: AktivitasComponent,
    children: [
      { path: '', component: AktivitasDefaultComponent, pathMatch: 'full' },
      { path: 'organisasi', component: OrganisasiComponent },
      { path: 'ukm', component: UkmComponent },
      { path: 'berita', component: BeritaComponent },
      { path: 'event', component: EventComponent },
    ],
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

  // Alumni
  {
  path: 'alumni',
  component: AlumniComponent,
  children: [
    { path: '', component: AlumniDefaultComponent }, // default
    { path: 'data-alumni', component: DataAlumniComponent },
    { path: 'kegiatan-alumni', component: KegiatanAlumniComponent },
  ]
},

  // Karier
  { path: 'karier', component: KarierComponent },

  //PMB
  {
  path: 'pmb',
  component: PmbComponent,
  children: [
    { path: '', component: PmbDefaultComponent }, // default
    { path: 'beasiswa', component: BeasiswaComponent },
  ]
},

  //Kontak
  { path: 'kontak', component: KontakComponent },
];
