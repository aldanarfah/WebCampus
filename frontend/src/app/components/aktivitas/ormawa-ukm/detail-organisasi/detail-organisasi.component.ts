import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Pastikan ini ada
import { OrganisasiService } from '../../../../services/organisasi.service';
import { Organisasi } from '../../../../models/organisasi.model';

interface ContentItem {
  id: number;
  judul: string;
  tanggal: string;
  tanggalMulai?: string;
  tanggalSelesai?: string;
  gambar: string;
  isi: string;
  type: 'berita' | 'event' | 'struktur';
  lokasi?: string;
  harga?: string;
  linkPendaftaran?: string;
  status?: string;
}

@Component({
  selector: 'app-detail-organisasi',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './detail-organisasi.component.html',
  styleUrl: './detail-organisasi.component.css'
})
export class DetailOrganisasiComponent implements OnInit {
  organisasi?: Organisasi;
  isLoading: boolean = true;
  imageBaseUrl = 'http://localhost:8080/uploads/';

  heroImages: { [key: number]: string } = {
    47: 'assets/img/bem1.jpg',
    48: 'assets/img/bem1.jpg',
    49: 'assets/img/bem1.jpg',
    50: 'assets/img/bem1.jpg',
    51: 'assets/img/bem1.jpg',
    52: 'assets/img/bem1.jpg',
    53: 'assets/img/bem1.jpg',
    17: 'assets/img/bem1.jpg',
  };
  currentHeroImage: string = 'assets/img/gedung-default.jpg';

  // --- BERITA ---
  listBerita: ContentItem[] = [];
  filteredBerita: ContentItem[] = [];
  searchKeyword: string = '';

  // --- EVENT (UPDATE) ---
  listEvent: ContentItem[] = [];
  filteredEvent: ContentItem[] = []; // Penampung hasil filter event
  searchEventKeyword: string = '';   // Keyword pencarian event

  selectedItem: ContentItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private organisasiService: OrganisasiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const orgId = Number(id);
      this.loadData(orgId);
      this.setHeroImage(orgId);

      this.loadBerita(orgId);
      this.loadEvent(orgId);
    }
  }

  loadData(id: number) {
    this.organisasiService.get(id).subscribe({
      next: (data) => {
        this.organisasi = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Gagal load organisasi:', err);
        this.isLoading = false;
      }
    });
  }

  // === SEARCH BERITA ===
  loadBerita(id: number) {
    this.organisasiService.getBeritaByOrganisasi(id).subscribe({
      next: (data) => {
        this.listBerita = data.map((item: any) => ({
          id: item.idBerita || item.id_berita,
          type: 'berita',
          judul: item.judul,
          isi: item.isi,
          gambar: item.gambarBerita ? (this.imageBaseUrl + item.gambarBerita) : 'assets/img/berita1.jpg',
          tanggal: new Date(item.tanggalPublikasi).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'short', year: 'numeric'
          })
        }));
        this.filteredBerita = [...this.listBerita];
      },
      error: (err) => console.error('Gagal load berita:', err)
    });
  }

  onSearch(): void {
    if (!this.searchKeyword || this.searchKeyword.trim() === '') {
      this.filteredBerita = [...this.listBerita];
    } else {
      const keyword = this.searchKeyword.toLowerCase();
      this.filteredBerita = this.listBerita.filter(item =>
        item.judul.toLowerCase().includes(keyword)
      );
    }
  }

  // === SEARCH EVENT (BARU) ===
  loadEvent(id: number) {
    this.organisasiService.getEventByOrganisasi(id).subscribe({
      next: (data) => {
        this.listEvent = data.map((item: any) => ({
          id: item.idEvent || item.id_event,
          type: 'event',
          judul: item.namaEvent || item.nama_event,
          isi: item.deskripsi,
          gambar: item.gambarEvent ? (this.imageBaseUrl + item.gambarEvent) : 'assets/img/event1.jpg',

          tanggal: new Date(item.tanggalMulai).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'short', year: 'numeric'
          }),
          tanggalMulai: new Date(item.tanggalMulai).toLocaleString('id-ID', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
          }) + ' WIB',
          tanggalSelesai: new Date(item.tanggalSelesai).toLocaleString('id-ID', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
          }) + ' WIB',
          lokasi: item.lokasi,
          harga: item.harga == 0 ? 'Gratis' : 'Rp ' + new Intl.NumberFormat('id-ID').format(item.harga),
          linkPendaftaran: item.linkPendaftaran || item.link_pendaftaran,
          status: this.cekStatusEvent(item.tanggalMulai, item.tanggalSelesai)
        }));

        // INISIALISASI FILTER EVENT
        this.filteredEvent = [...this.listEvent];
      },
      error: (err) => console.error('Gagal load event:', err)
    });
  }

  // LOGIKA PENCARIAN EVENT
  onSearchEvent(): void {
    if (!this.searchEventKeyword || this.searchEventKeyword.trim() === '') {
      this.filteredEvent = [...this.listEvent];
    } else {
      const keyword = this.searchEventKeyword.toLowerCase();
      this.filteredEvent = this.listEvent.filter(item =>
        item.judul.toLowerCase().includes(keyword)
      );
    }
  }

  cekStatusEvent(mulai: string, selesai: string): string {
    const now = new Date();
    const start = new Date(mulai);
    const end = new Date(selesai);

    if (now < start) return 'Akan Datang';
    if (now >= start && now <= end) return 'Berlangsung';
    return 'Selesai';
  }

  setHeroImage(id: number) {
    if (this.heroImages[id]) {
      this.currentHeroImage = this.heroImages[id];
    }
  }

  getLinkWA(nomor: string | undefined): string {
    if (!nomor) return '#';
    let formatted = nomor.trim();
    if (formatted.startsWith('0')) formatted = '62' + formatted.slice(1);
    return `https://wa.me/${formatted}`;
  }

  openModal(item: ContentItem) {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedItem = null;
    document.body.style.overflow = 'auto';
  }
}
