import { Routes } from '@angular/router';

// Home
import { HomeComponent } from './components/home/home.component';

// Profil
import { ProfilComponent } from './components/profil/profil/profil.component';
import { SejarahComponent } from './components/profil/sejarah/sejarah.component';
import { VisiMisiComponent } from './components/profil/visi-misi/visi-misi.component';
import { PimpinanComponent } from './components/profil/pimpinan/pimpinan.component';
import { StrukturComponent } from './components/profil/struktur/struktur.component';
import { SaranaComponent } from './components/profil/sarana/sarana.component';

// Akademik
import { AkademikComponent } from './components/akademik/akademik/akademik.component';
import { DataProdiComponent } from './components/akademik/data-prodi/data-prodi.component';
import { KurikulumComponent } from './components/akademik/kurikulum/kurikulum.component';
import { DataDosenComponent } from './components/akademik/data-dosen/data-dosen.component';
import { MahasiswaAktifComponent } from './components/akademik/mahasiswa-aktif/mahasiswa-aktif.component';
import { JadwalComponent } from './components/akademik/jadwal/jadwal.component';

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

// Karier & Contact
import { KarierComponent } from './components/karier/karier.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  
  // Profil
  { path: 'profil', component: ProfilComponent },
  { path: 'profil/sejarah', component: SejarahComponent },
  { path: 'profil/visi-misi', component: VisiMisiComponent },
  { path: 'profil/pimpinan', component: PimpinanComponent },
  { path: 'profil/struktur', component: StrukturComponent },
  { path: 'profil/sarana', component: SaranaComponent },

  // Akademik
  { path: 'akademik', component: AkademikComponent },
  { path: 'akademik/data-prodi', component: DataProdiComponent },
  { path: 'akademik/kurikulum', component: KurikulumComponent },
  { path: 'akademik/data-dosen', component: DataDosenComponent },
  { path: 'akademik/mahasiswa-aktif', component: MahasiswaAktifComponent },
  { path: 'akademik/jadwal', component: JadwalComponent },

  // Aktivitas Kampus
 // Aktivitas Kampus (pakai nested route biar sidebar berfungsi)
{
  path: 'aktivitas',
  component: AktivitasComponent,
  children: [
    { path: '', component: AktivitasDefaultComponent, pathMatch: 'full' }, // /aktivitas
    { path: 'organisasi', component: OrganisasiComponent },
    { path: 'ukm', component: UkmComponent },
    { path: 'berita', component: BeritaComponent },
    { path: 'event', component: EventComponent },
  ],
},


  // Alumni
  { path: 'alumni', component: AlumniComponent },
  { path: 'alumni/data-alumni', component: DataAlumniComponent },

  // Karier dan Kontak
  { path: 'karier', component: KarierComponent },
  { path: 'contact', component: ContactComponent },
];
