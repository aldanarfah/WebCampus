import { Organisasi } from './organisasi.model';
import { Ukm } from './ukm.model';

export interface Event {
    idEvent?: number;
    namaEvent: string;
    deskripsi: string;
    harga: number;
    lokasi: string;
    linkPendaftaran?: string;
    gambarEvent?: string; // Poster

    // Tanggal & Jam (Format String: 'YYYY-MM-DDTHH:mm')
    tanggalMulai: string;
    tanggalSelesai: string;

    status: 'publik' | 'draft'; // Status Admin

    // Field dari Backend @Transient (Read Only)
    statusWaktu?: string; // 'Akan Datang', 'Berlangsung', 'Selesai'

    // Relasi Pemilik
    organisasi?: Organisasi | null;
    ukm?: Ukm | null;
}
