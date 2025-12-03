export interface Organisasi {
  idOrganisasi?: number;
  namaOrganisasi: string;
  gambarLogo?: string; // Sesuai entity backend
  deskripsi: string;
  penanggungJawab?: string;
  ketua: string;
  periode: string;
  namaProdi?: string;
  contactPerson?: string;
  status: 'aktif' | 'nonaktif';
}
