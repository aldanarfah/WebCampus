export interface Admin {
  idAdmin?: number; // Tanda tanya artinya opsional (karena auto-increment)
  namaAdmin: string;
  username: string;
  password?: string; // Wajib saat create, tapi opsional saat read
  email: string;
}
