export interface Ukm {
    idUkm?: number;
    namaUkm: string;

    // ✨ INI YANG BIKIN ERROR DI HTML KALAU TIDAK ADA:
    gambarLogo?: string;          // Tanda tanya (?) artinya optional
    strukturOrganisasi?: string;  // Tanda tanya (?) artinya optional

    // Field baru lainnya
    penanggungJawab: string;

    // Field lama
    deskripsi: string;
    ketua: string;
    periode: string;
    namaProdi: string;
    contactPerson: string;
    status: string;

    tanggalDibuat?: string;
    dihapusPada?: string;
}
