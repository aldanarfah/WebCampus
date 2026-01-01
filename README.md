**Struktur proyek WebCampus untuk fitur organisasi mahasiswa dan UKM menggunakan Springboot :** 

althan@althan-VivoBook-ASUSLaptop-X415MA-A416MA:~/Desktop/WebCampus/backend/src$ tree
.
├── main
│   ├── java
│   │   └── com
│   │       └── backend
│   │           └── backend
│   │               ├── BackendApplication.java
│   │               ├── config
│   │               │   ├── DataSeeder.java
│   │               │   ├── WebConfig.java
│   │               │   └── WebMvcConfig.java
│   │               ├── controller
│   │               │   ├── AdminController.java
│   │               │   ├── BeritaController.java
│   │               │   ├── DashboardController.java
│   │               │   ├── EventController.java
│   │               │   ├── FileController.java
│   │               │   ├── OrganisasiController.java
│   │               │   └── UkmController.java
│   │               ├── dto
│   │               │   └── DashboardStats.java
│   │               ├── model
│   │               │   ├── Admin.java
│   │               │   ├── Berita.java
│   │               │   ├── Event.java
│   │               │   ├── Organisasi.java
│   │               │   └── Ukm.java
│   │               ├── repository
│   │               │   ├── AdminRepository.java
│   │               │   ├── BeritaRepository.java
│   │               │   ├── EventRepository.java
│   │               │   ├── OrganisasiRepository.java
│   │               │   └── UkmRepository.java
│   │               └── service
│   │                   ├── AdminService.java
│   │                   ├── BeritaService.java
│   │                   ├── EventService.java
│   │                   ├── OrganisasiService.java
│   │                   └── UkmService.java
│   └── resources
│       ├── application.properties
│       ├── static
│       └── templates
└── test
    └── java
        └── com
            └── campusbackend
                └── backend
                    └── BackendApplicationTests.java
                    
20 directories, 29 files


**Struktur proyek WebCampus menggunakan Angular :**

althan@althan-VivoBook-ASUSLaptop-X415MA-A416MA:~/Desktop/WebCampus/frontend/src$ tree
.
├── app
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.server.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── components
│   │   ├── admin
│   │   │   ├── admin-list
│   │   │   │   ├── admin-list.component.css
│   │   │   │   ├── admin-list.component.html
│   │   │   │   ├── admin-list.component.spec.ts
│   │   │   │   └── admin-list.component.ts
│   │   │   ├── admin-tambah
│   │   │   │   ├── admin-tambah.component.css
│   │   │   │   ├── admin-tambah.component.html
│   │   │   │   ├── admin-tambah.component.spec.ts
│   │   │   │   └── admin-tambah.component.ts
│   │   │   ├── berita-admin
│   │   │   │   ├── berita-admin.component.css
│   │   │   │   ├── berita-admin.component.html
│   │   │   │   ├── berita-admin.component.spec.ts
│   │   │   │   ├── berita-admin.component.ts
│   │   │   │   ├── berita-edit
│   │   │   │   │   ├── berita-edit.component.css
│   │   │   │   │   ├── berita-edit.component.html
│   │   │   │   │   ├── berita-edit.component.spec.ts
│   │   │   │   │   └── berita-edit.component.ts
│   │   │   │   └── berita-tambah
│   │   │   │       ├── berita-tambah.component.css
│   │   │   │       ├── berita-tambah.component.html
│   │   │   │       ├── berita-tambah.component.spec.ts
│   │   │   │       └── berita-tambah.component.ts
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.css
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── event-admin
│   │   │   │   ├── event-admin.component.css
│   │   │   │   ├── event-admin.component.html
│   │   │   │   ├── event-admin.component.spec.ts
│   │   │   │   ├── event-admin.component.ts
│   │   │   │   ├── event-edit
│   │   │   │   │   ├── event-edit.component.css
│   │   │   │   │   ├── event-edit.component.html
│   │   │   │   │   ├── event-edit.component.spec.ts
│   │   │   │   │   └── event-edit.component.ts
│   │   │   │   └── event-tambah
│   │   │   │       ├── event-tambah.component.css
│   │   │   │       ├── event-tambah.component.html
│   │   │   │       ├── event-tambah.component.spec.ts
│   │   │   │       └── event-tambah.component.ts
│   │   │   ├── home-admin
│   │   │   │   ├── home-admin.component.css
│   │   │   │   ├── home-admin.component.html
│   │   │   │   ├── home-admin.component.spec.ts
│   │   │   │   └── home-admin.component.ts
│   │   │   ├── organisasi-admin
│   │   │   │   ├── organisasi-admin.component.css
│   │   │   │   ├── organisasi-admin.component.html
│   │   │   │   ├── organisasi-admin.component.spec.ts
│   │   │   │   ├── organisasi-admin.component.ts
│   │   │   │   ├── organisasi-edit
│   │   │   │   │   ├── organisasi-edit.component.css
│   │   │   │   │   ├── organisasi-edit.component.html
│   │   │   │   │   ├── organisasi-edit.component.spec.ts
│   │   │   │   │   └── organisasi-edit.component.ts
│   │   │   │   └── organisasi-tambah
│   │   │   │       ├── organisasi-tambah.component.css
│   │   │   │       ├── organisasi-tambah.component.html
│   │   │   │       ├── organisasi-tambah.component.spec.ts
│   │   │   │       └── organisasi-tambah.component.ts
│   │   │   └── ukm-admin
│   │   │       ├── ukm-admin.component.css
│   │   │       ├── ukm-admin.component.html
│   │   │       ├── ukm-admin.component.spec.ts
│   │   │       ├── ukm-admin.component.ts
│   │   │       ├── ukm-edit
│   │   │       │   ├── ukm-edit.component.css
│   │   │       │   ├── ukm-edit.component.html
│   │   │       │   ├── ukm-edit.component.spec.ts
│   │   │       │   └── ukm-edit.component.ts
│   │   │       └── ukm-tambah
│   │   │           ├── ukm-tambah.component.css
│   │   │           ├── ukm-tambah.component.html
│   │   │           ├── ukm-tambah.component.spec.ts
│   │   │           └── ukm-tambah.component.ts
│   │   ├── akademik
│   │   │   ├── akademik
│   │   │   │   ├── akademik.component.css
│   │   │   │   ├── akademik.component.html
│   │   │   │   ├── akademik.component.spec.ts
│   │   │   │   └── akademik.component.ts
│   │   │   ├── akademik-home
│   │   │   │   ├── akademik-home.component.css
│   │   │   │   ├── akademik-home.component.html
│   │   │   │   ├── akademik-home.component.spec.ts
│   │   │   │   └── akademik-home.component.ts
│   │   │   ├── data-dosen
│   │   │   │   ├── data-dosen.component.css
│   │   │   │   ├── data-dosen.component.html
│   │   │   │   ├── data-dosen.component.spec.ts
│   │   │   │   ├── data-dosen.component.ts
│   │   │   │   └── detail-dosen
│   │   │   │       ├── detail-dosen.component.css
│   │   │   │       ├── detail-dosen.component.html
│   │   │   │       ├── detail-dosen.component.spec.ts
│   │   │   │       └── detail-dosen.component.ts
│   │   │   ├── data-prodi
│   │   │   │   ├── akuntansi
│   │   │   │   │   ├── akuntansi.component.css
│   │   │   │   │   ├── akuntansi.component.html
│   │   │   │   │   ├── akuntansi.component.spec.ts
│   │   │   │   │   └── akuntansi.component.ts
│   │   │   │   ├── sipil
│   │   │   │   │   ├── sipil.component.css
│   │   │   │   │   ├── sipil.component.html
│   │   │   │   │   ├── sipil.component.spec.ts
│   │   │   │   │   └── sipil.component.ts
│   │   │   │   ├── ti
│   │   │   │   │   ├── ti.component.css
│   │   │   │   │   ├── ti.component.html
│   │   │   │   │   ├── ti.component.spec.ts
│   │   │   │   │   └── ti.component.ts
│   │   │   │   └── tro
│   │   │   │       ├── tro.component.css
│   │   │   │       ├── tro.component.html
│   │   │   │       ├── tro.component.spec.ts
│   │   │   │       └── tro.component.ts
│   │   │   ├── jadwal
│   │   │   │   ├── jadwal.component.css
│   │   │   │   ├── jadwal.component.html
│   │   │   │   ├── jadwal.component.spec.ts
│   │   │   │   └── jadwal.component.ts
│   │   │   ├── kurikulum
│   │   │   │   ├── kurikulum.component.css
│   │   │   │   ├── kurikulum.component.html
│   │   │   │   ├── kurikulum.component.spec.ts
│   │   │   │   └── kurikulum.component.ts
│   │   │   └── mahasiswa-aktif
│   │   │       ├── detail-mahasiswa
│   │   │       │   ├── detail-mahasiswa.component.css
│   │   │       │   ├── detail-mahasiswa.component.html
│   │   │       │   ├── detail-mahasiswa.component.spec.ts
│   │   │       │   └── detail-mahasiswa.component.ts
│   │   │       ├── mahasiswa-aktif.component.css
│   │   │       ├── mahasiswa-aktif.component.html
│   │   │       ├── mahasiswa-aktif.component.spec.ts
│   │   │       └── mahasiswa-aktif.component.ts
│   │   ├── aktivitas
│   │   │   ├── aktivitas
│   │   │   │   ├── aktivitas.component.css
│   │   │   │   ├── aktivitas.component.html
│   │   │   │   ├── aktivitas.component.spec.ts
│   │   │   │   └── aktivitas.component.ts
│   │   │   ├── aktivitas-home
│   │   │   │   ├── aktivitas-home.component.css
│   │   │   │   ├── aktivitas-home.component.html
│   │   │   │   ├── aktivitas-home.component.spec.ts
│   │   │   │   └── aktivitas-home.component.ts
│   │   │   ├── berita
│   │   │   │   ├── berita.component.css
│   │   │   │   ├── berita.component.html
│   │   │   │   ├── berita.component.spec.ts
│   │   │   │   ├── berita.component.ts
│   │   │   │   └── detail-berita
│   │   │   │       ├── detail-berita.component.css
│   │   │   │       ├── detail-berita.component.html
│   │   │   │       ├── detail-berita.component.spec.ts
│   │   │   │       └── detail-berita.component.ts
│   │   │   ├── event
│   │   │   │   ├── detail-event
│   │   │   │   │   ├── detail-event.component.css
│   │   │   │   │   ├── detail-event.component.html
│   │   │   │   │   ├── detail-event.component.spec.ts
│   │   │   │   │   └── detail-event.component.ts
│   │   │   │   ├── event.component.css
│   │   │   │   ├── event.component.html
│   │   │   │   ├── event.component.spec.ts
│   │   │   │   └── event.component.ts
│   │   │   └── ormawa-ukm
│   │   │       ├── detail-organisasi
│   │   │       │   ├── detail-organisasi.component.css
│   │   │       │   ├── detail-organisasi.component.html
│   │   │       │   └── detail-organisasi.component.ts
│   │   │       ├── detail-ukm
│   │   │       │   ├── detail-ukm.component.css
│   │   │       │   ├── detail-ukm.component.html
│   │   │       │   └── detail-ukm.component.ts
│   │   │       ├── ormawa-ukm.component.css
│   │   │       ├── ormawa-ukm.component.html
│   │   │       ├── ormawa-ukm.component.spec.ts
│   │   │       └── ormawa-ukm.component.ts
│   │   ├── alumni-karir
│   │   │   ├── alumni-karir
│   │   │   │   ├── alumni-karir.component.css
│   │   │   │   ├── alumni-karir.component.html
│   │   │   │   ├── alumni-karir.component.spec.ts
│   │   │   │   └── alumni-karir.component.ts
│   │   │   ├── alumni-karir.component.ts
│   │   │   ├── alumni-karir-home
│   │   │   │   ├── alumni-karir-home.component.css
│   │   │   │   ├── alumni-karir-home.component.html
│   │   │   │   ├── alumni-karir-home.component.spec.ts
│   │   │   │   └── alumni-karir-home.component.ts
│   │   │   ├── kata-alumni
│   │   │   │   ├── detail-kata
│   │   │   │   │   ├── detail-kata.component.css
│   │   │   │   │   ├── detail-kata.component.html
│   │   │   │   │   ├── detail-kata.component.spec.ts
│   │   │   │   │   └── detail-kata.component.ts
│   │   │   │   ├── kata-alumni.component.css
│   │   │   │   ├── kata-alumni.component.html
│   │   │   │   ├── kata-alumni.component.spec.ts
│   │   │   │   └── kata-alumni.component.ts
│   │   │   ├── kegiatan-alumni
│   │   │   │   ├── detail-kegiatan
│   │   │   │   │   ├── detail-kegiatan.component.css
│   │   │   │   │   ├── detail-kegiatan.component.html
│   │   │   │   │   ├── detail-kegiatan.component.spec.ts
│   │   │   │   │   └── detail-kegiatan.component.ts
│   │   │   │   ├── kegiatan-alumni.component.css
│   │   │   │   ├── kegiatan-alumni.component.html
│   │   │   │   ├── kegiatan-alumni.component.spec.ts
│   │   │   │   └── kegiatan-alumni.component.ts
│   │   │   └── loker
│   │   │       ├── detail-loker
│   │   │       │   ├── detail-loker.component.css
│   │   │       │   ├── detail-loker.component.html
│   │   │       │   ├── detail-loker.component.spec.ts
│   │   │       │   └── detail-loker.component.ts
│   │   │       ├── loker.component.css
│   │   │       ├── loker.component.html
│   │   │       ├── loker.component.spec.ts
│   │   │       └── loker.component.ts
│   │   ├── contact
│   │   │   ├── contact.component.css
│   │   │   ├── contact.component.html
│   │   │   ├── contact.component.spec.ts
│   │   │   └── contact.component.ts
│   │   ├── footer
│   │   │   ├── footer.component.css
│   │   │   ├── footer.component.html
│   │   │   ├── footer.component.spec.ts
│   │   │   └── footer.component.ts
│   │   ├── header
│   │   │   ├── header.component.css
│   │   │   ├── header.component.html
│   │   │   ├── header.component.spec.ts
│   │   │   └── header.component.ts
│   │   ├── home
│   │   │   ├── home.component.css
│   │   │   ├── home.component.html
│   │   │   ├── home.component.spec.ts
│   │   │   └── home.component.ts
│   │   ├── kontak
│   │   │   ├── kontak.component.css
│   │   │   ├── kontak.component.html
│   │   │   ├── kontak.component.spec.ts
│   │   │   └── kontak.component.ts
│   │   ├── login
│   │   │   ├── login.component.css
│   │   │   ├── login.component.html
│   │   │   ├── login.component.spec.ts
│   │   │   └── login.component.ts
│   │   ├── pmb
│   │   │   ├── beasiswa
│   │   │   │   ├── beasiswa.component.css
│   │   │   │   ├── beasiswa.component.html
│   │   │   │   ├── beasiswa.component.spec.ts
│   │   │   │   └── beasiswa.component.ts
│   │   │   └── pmb
│   │   │       ├── pmb.component.css
│   │   │       ├── pmb.component.html
│   │   │       ├── pmb.component.spec.ts
│   │   │       └── pmb.component.ts
│   │   └── profil
│   │       ├── profil
│   │       │   ├── profil.component.css
│   │       │   ├── profil.component.html
│   │       │   ├── profil.component.spec.ts
│   │       │   └── profil.component.ts
│   │       ├── profil-home
│   │       │   ├── profil-home.component.css
│   │       │   ├── profil-home.component.html
│   │       │   ├── profil-home.component.spec.ts
│   │       │   └── profil-home.component.ts
│   │       ├── sarana
│   │       │   ├── sarana.component.css
│   │       │   ├── sarana.component.html
│   │       │   ├── sarana.component.spec.ts
│   │       │   └── sarana.component.ts
│   │       ├── sejarah
│   │       │   ├── sejarah.component.css
│   │       │   ├── sejarah.component.html
│   │       │   ├── sejarah.component.spec.ts
│   │       │   └── sejarah.component.ts
│   │       ├── struktur-organisasi
│   │       │   ├── struktur-organisasi.component.css
│   │       │   ├── struktur-organisasi.component.html
│   │       │   ├── struktur-organisasi.component.spec.ts
│   │       │   └── struktur-organisasi.component.ts
│   │       └── visi-misi
│   │           ├── visi-misi.component.css
│   │           ├── visi-misi.component.html
│   │           ├── visi-misi.component.spec.ts
│   │           └── visi-misi.component.ts
│   ├── guards
│   │   ├── admin.guard.spec.ts
│   │   └── admin.guard.ts
│   ├── models
│   │   ├── admin.model.ts
│   │   ├── berita.model.ts
│   │   ├── event.model.ts
│   │   ├── organisasi.model.ts
│   │   └── ukm.model.ts
│   └── services
│       ├── admin.service.spec.ts
│       ├── admin.service.ts
│       ├── auth.service.spec.ts
│       ├── auth.service.ts
│       ├── berita.service.spec.ts
│       ├── berita.service.ts
│       ├── dashboard.service.spec.ts
│       ├── dashboard.service.ts
│       ├── event.service.ts
│       ├── organisasi.service.ts
│       └── ukm.service.ts
├── index.html
├── main.server.ts
├── main.ts
└── styles.css

72 directories, 264 files
