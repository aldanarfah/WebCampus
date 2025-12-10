import { Organisasi } from './organisasi.model';
import { Ukm } from './ukm.model';

export interface Berita {
    idBerita?: number;
    judul: string;
    isi: string;
    gambarBerita?: string;
    status: 'publik' | 'draft';
    tanggalPublikasi?: string;

    // Relasi
    organisasi?: Organisasi | null;
    ukm?: Ukm | null;

    // Tambahan agar tidak error
    dibuatOleh?: number;
}
