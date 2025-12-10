export interface Organisasi {
    idOrganisasi?: number; // Optional karena saat create belum ada ID
    namaOrganisasi: string;
    deskripsi: string;
    ketua: string;
    periode: string;
    penanggungJawab: string;
    contactPerson: string;
    namaProdi: string;
    status: string;
    
    // TAMBAHKAN DUA BARIS INI:
    gambarLogo?: string; 
    strukturOrganisasi?: string;
    
    tanggalDibuat?: string;
    dihapusPada?: string;
}