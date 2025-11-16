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

// Aktivitas Kampus
import { AktivitasComponent } from './components/aktivitas/aktivitas/aktivitas.component';
import { OrganisasiComponent } from './components/aktivitas/organisasi/organisasi.component';
import { UkmComponent } from './components/aktivitas/ukm/ukm.component';
import { BeritaComponent } from './components/aktivitas/berita/berita.component';
import { EventComponent } from './components/aktivitas/event/event.component';

// Aktivitas Default
import { AktivitasDefaultComponent } from './components/aktivitas/aktivitas-default/aktivitas-default.component';

// Alumni
import { AlumniComponent } from './components/alumni/alumni/alumni.component';
import { DataAlumniComponent } from './components/alumni/data-alumni/data-alumni.component';

// Karier 
import { KarierComponent } from './components/karier/karier.component'; 

//Kontak
import { ContactComponent } from './components/contact/contact.component';

// Login
import { LoginComponent } from './components/login/login.component';

// Admin Dashboard
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { OrganisasiAdminComponent } from './components/admin/organisasi-admin/organisasi-admin.component';
import { UkmAdminComponent } from './components/admin/ukm-admin/ukm-admin.component';
import { BeritaAdminComponent } from './components/admin/berita-admin/berita-admin.component';
import { EventAdminComponent } from './components/admin/event-admin/event-admin.component';

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

  // Aktivitas Kampus
  {
    path: 'aktivitas',
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
  children: [
    { path: '', component: HomeAdminComponent },  // ⬅ INI DASHBOARD
    { path: 'organisasi', component: OrganisasiAdminComponent },
    { path: 'ukm', component: UkmAdminComponent },
    { path: 'berita', component: BeritaAdminComponent },
    { path: 'event', component: EventAdminComponent },
  ],
},

  // Alumni
  { path: 'alumni', component: AlumniComponent },
  { path: 'alumni/data-alumni', component: DataAlumniComponent },

  // Karier dan Kontak
  { path: 'karier', component: KarierComponent },
  { path: 'contact', component: ContactComponent },
];
