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

// Aktivitas Kampus
import { AktivitasComponent } from './components/aktivitas/aktivitas/aktivitas.component';
import { AktivitasHomeComponent } from './components/aktivitas/aktivitas-home/aktivitas-home.component';
import { OrmawaUkmComponent } from './components/aktivitas/ormawa-ukm/ormawa-ukm.component';

import { HmtiComponent } from './components/aktivitas/ormawa-ukm/hmti/hmti.component';
import { HmtroComponent } from './components/aktivitas/ormawa-ukm/hmtro/hmtro.component';
import { HmtsComponent } from './components/aktivitas/ormawa-ukm/hmts/hmts.component';
import { HimaakaComponent } from './components/aktivitas/ormawa-ukm/himaaka/himaaka.component';
import { BemComponent } from './components/aktivitas/ormawa-ukm/bem/bem.component';
import { MapalaComponent } from './components/aktivitas/ormawa-ukm/mapala/mapala.component';
import { WiraComponent } from './components/aktivitas/ormawa-ukm/wira/wira.component';

import { BeritaComponent } from './components/aktivitas/berita/berita.component';
import { EventComponent } from './components/aktivitas/event/event.component';


// Alumni-Karir
import { AlumniKarirComponent } from './components/alumni-karir/alumni-karir/alumni-karir.component';
import { AlumniKarirHomeComponent } from './components/alumni-karir/alumni-karir-home/alumni-karir-home.component';

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
  path: 'aktivitas',
  component: AktivitasComponent,
  children: [
    { path: '', component: AktivitasHomeComponent },

    // Ormawa & UKM (halaman utama)
    { path: 'ormawa-ukm', component: OrmawaUkmComponent },

    // 7 organisasi
    { path: 'ormawa-ukm/hmti', component: HmtiComponent },
    { path: 'ormawa-ukm/hmtro', component: HmtroComponent },
    { path: 'ormawa-ukm/hmts', component: HmtsComponent },
    { path: 'ormawa-ukm/himaaka', component: HimaakaComponent },
    { path: 'ormawa-ukm/bem', component: BemComponent },
    { path: 'ormawa-ukm/mapala', component: MapalaComponent },
    { path: 'ormawa-ukm/wira', component: WiraComponent },

    // berita & event
    { path: 'berita', component: BeritaComponent },
    { path: 'event', component: EventComponent },
  ]
},

  // Login Admin
  { path: 'login', component: LoginComponent },

  // ADMIN DASHBOARD
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeAdminComponent },
      { path: 'organisasi', component: OrganisasiAdminComponent },
      { path: 'ukm', component: UkmAdminComponent },
      { path: 'berita', component: BeritaAdminComponent },
      { path: 'event', component: EventAdminComponent },
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
