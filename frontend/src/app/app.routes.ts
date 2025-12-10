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

// Admin Dashboard
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';

import { OrganisasiAdminComponent } from './components/admin/organisasi-admin/organisasi-admin.component';
import { UkmAdminComponent } from './components/admin/ukm-admin/ukm-admin.component';
import { BeritaAdminComponent } from './components/admin/berita-admin/berita-admin.component';
import { EventAdminComponent } from './components/admin/event-admin/event-admin.component';


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
