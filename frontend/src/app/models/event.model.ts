export interface Event {
  idEvent?: number; // Penting: idEvent (bukan id)
  namaEvent: string;
  deskripsi: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  lokasi: string;
  gambarEvent?: string; // Menyimpan nama file gambar
  status?: 'akan datang' | 'berlangsung' | 'selesai';


  // Relasi (Sesuaikan dengan backend, minimal kirim ID admin)
  dibuatOleh?: { idAdmin: number };
}
