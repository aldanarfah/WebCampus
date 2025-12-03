export interface Berita {
  idBerita?: number;
  judul: string;
  isi: string;
  gambarBerita?: string;
  tanggalPublikasi?: string;
  status: 'publik' | 'draft';

  // Relasi (Kita gunakan 'any' dulu agar simpel, atau sesuaikan dengan model jika ada)
  organisasi?: any;
  ukm?: any;
  dibuatOleh?: any; // Wajib ada karena di database NOT NULL
}
