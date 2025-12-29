import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-berita',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-berita.component.html',
  styleUrls: ['./detail-berita.component.css']
})
export class DetailBeritaComponent {

  berita: any;
  daftarBerita = [
    {
      judul: 'TIM INOVATOR DIGITAL RAIH PENGHARGAAN TERTINGGI',
      slug: 'tim-inovator-digital-raih-penghargaan-tertinggi',
      tanggal: '15 Desember 2025',
      gambar: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      deskripsi:  `Lumajang, 6 November 2025 — Mahasiswa Program Studi Teknologi Rekayasa Otomotif (TRO) Politeknik Negeri Malang PSDKU Lumajang terus berinovasi dalam menghadapi tantangan industri modern. 
      
Melalui kegiatan praktik di laboratorium otomotif, para mahasiswa dilatih untuk memahami sistem kerja kendaraan modern berbasis elektronika dan digitalisasi mesin. Gambar di atas memperlihatkan salah satu mahasiswa sedang melakukan pengujian sistem kontrol kendaraan menggunakan perangkat lunak dan perangkat keras otomotif modern. 

Kegiatan ini merupakan bagian dari kurikulum berbasis Outcome Based Education (OBE) yang diterapkan di Polinema, di mana mahasiswa dituntut untuk tidak hanya memahami teori, tetapi juga mampu menerapkan inovasi teknologi di dunia nyata. Kepala Program Studi TRO PSDKU Lumajang menjelaskan bahwa fokus utama pendidikan vokasi adalah kesiapan kerja dan kemampuan problem solving di industri otomotif modern. 

“Kami ingin lulusan kami tidak hanya menjadi teknisi, tetapi juga engineer yang siap menciptakan solusi teknologi kendaraan masa depan,” ujarnya. Selain bidang otomotif, Polinema PSDKU Lumajang juga berkomitmen mengembangkan kerja sama industri dan penelitian terapan guna memperkuat daya saing mahasiswa di kancah nasional maupun internasional. 

Melalui berbagai pelatihan, sertifikasi, dan proyek penelitian bersama mitra industri, mahasiswa mendapatkan kesempatan untuk mengimplementasikan inovasi di dunia profesional. Dengan semangat kolaborasi dan inovasi ini, Polinema PSDKU Lumajang terus membuktikan perannya sebagai pusat pendidikan vokasi unggulan di wilayah selatan Jawa Timur.`
    },
    {
      judul: 'TIM TRO KEMBALI MENOREHKAN PRESTASI GEMILANG PADA AJANG KONTES MOBILHEMATENERGI (KMHE) 2025',
      slug: 'tim-tro-menorehkan-prestasi-kmhe-2025',
      tanggal: '5 Januari 2026',
      gambar: '/assets/img/KMHE.jpg',
      deskripsi:  `Lumajang, 6 November 2025 — Mahasiswa Program Studi Teknologi Rekayasa Otomotif (TRO) Politeknik Negeri Malang PSDKU Lumajang terus berinovasi dalam menghadapi tantangan industri modern. 
      
Melalui kegiatan praktik di laboratorium otomotif, para mahasiswa dilatih untuk memahami sistem kerja kendaraan modern berbasis elektronika dan digitalisasi mesin. Gambar di atas memperlihatkan salah satu mahasiswa sedang melakukan pengujian sistem kontrol kendaraan menggunakan perangkat lunak dan perangkat keras otomotif modern. 

Kegiatan ini merupakan bagian dari kurikulum berbasis Outcome Based Education (OBE) yang diterapkan di Polinema, di mana mahasiswa dituntut untuk tidak hanya memahami teori, tetapi juga mampu menerapkan inovasi teknologi di dunia nyata. Kepala Program Studi TRO PSDKU Lumajang menjelaskan bahwa fokus utama pendidikan vokasi adalah kesiapan kerja dan kemampuan problem solving di industri otomotif modern. 

“Kami ingin lulusan kami tidak hanya menjadi teknisi, tetapi juga engineer yang siap menciptakan solusi teknologi kendaraan masa depan,” ujarnya. Selain bidang otomotif, Polinema PSDKU Lumajang juga berkomitmen mengembangkan kerja sama industri dan penelitian terapan guna memperkuat daya saing mahasiswa di kancah nasional maupun internasional. 

Melalui berbagai pelatihan, sertifikasi, dan proyek penelitian bersama mitra industri, mahasiswa mendapatkan kesempatan untuk mengimplementasikan inovasi di dunia profesional. Dengan semangat kolaborasi dan inovasi ini, Polinema PSDKU Lumajang terus membuktikan perannya sebagai pusat pendidikan vokasi unggulan di wilayah selatan Jawa Timur.`
    },    
  {
      judul: 'FOKUS PADA PENGEMBANGAN INFRASTRUKTUR BERKELANJUTAN YANG RELEVAN DENAGAN TEKNIK SIPIL DAN PROYEK PROYEK MASA KINI',
      slug: 'fokus-pengembangan-infrastruktur-teknik-sipil',
      tanggal: '20 Februari 2026',
      gambar: '/assets/img/sipil3.jpg',
      deskripsi:  `Lumajang, 6 November 2025 — Mahasiswa Program Studi Teknologi Rekayasa Otomotif (TRO) Politeknik Negeri Malang PSDKU Lumajang terus berinovasi dalam menghadapi tantangan industri modern. 
      
Melalui kegiatan praktik di laboratorium otomotif, para mahasiswa dilatih untuk memahami sistem kerja kendaraan modern berbasis elektronika dan digitalisasi mesin. Gambar di atas memperlihatkan salah satu mahasiswa sedang melakukan pengujian sistem kontrol kendaraan menggunakan perangkat lunak dan perangkat keras otomotif modern. 

Kegiatan ini merupakan bagian dari kurikulum berbasis Outcome Based Education (OBE) yang diterapkan di Polinema, di mana mahasiswa dituntut untuk tidak hanya memahami teori, tetapi juga mampu menerapkan inovasi teknologi di dunia nyata. Kepala Program Studi TRO PSDKU Lumajang menjelaskan bahwa fokus utama pendidikan vokasi adalah kesiapan kerja dan kemampuan problem solving di industri otomotif modern. 

“Kami ingin lulusan kami tidak hanya menjadi teknisi, tetapi juga engineer yang siap menciptakan solusi teknologi kendaraan masa depan,” ujarnya. Selain bidang otomotif, Polinema PSDKU Lumajang juga berkomitmen mengembangkan kerja sama industri dan penelitian terapan guna memperkuat daya saing mahasiswa di kancah nasional maupun internasional. 

Melalui berbagai pelatihan, sertifikasi, dan proyek penelitian bersama mitra industri, mahasiswa mendapatkan kesempatan untuk mengimplementasikan inovasi di dunia profesional. Dengan semangat kolaborasi dan inovasi ini, Polinema PSDKU Lumajang terus membuktikan perannya sebagai pusat pendidikan vokasi unggulan di wilayah selatan Jawa Timur.`
  }, 
];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.berita = this.daftarBerita.find(b => b.slug === slug);
  }
}
