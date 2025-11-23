import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <footer class="bg-white text-gray-700 border-t border-gray-200 py-12">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- KIRI: logo + alamat -->
        <div>
          <img src="assets/logo.png" alt="Logo Kampus" class="w-24 mb-4" />
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <lucide-icon [img]="MapPin" [size]="16" class="mr-2 mt-0.5"></lucide-icon>
              Jl. Raya Universitas No. 88<br />Lumajang, Jawa Timur
            </li>
            <li class="flex items-center">
              <lucide-icon [img]="Phone" [size]="16" class="mr-2"></lucide-icon>
              (0334) 123456
            </li>
            <li class="flex items-center">
              <lucide-icon [img]="Mail" [size]="16" class="mr-2"></lucide-icon>
              infokampus.ac.id
            </li>
          </ul>
        </div>

        <!-- PROGRAM STUDI -->
        <div>
          <h3 class="font-bold mb-4 text-lg">Program Studi</h3>
          <ul class="space-y-2 text-sm">
            <li><a routerLink="/akademik/data-prodi/tro" class="hover:text-blue-600 transition">D-IV Teknologi Rekayasa Otomotif</a></li>
            <li><a routerLink="/akademik/data-prodi/ti" class="hover:text-blue-600 transition">D-III Teknologi Informasi</a></li>
            <li><a routerLink="/akademik/data-prodi/sipil" class="hover:text-blue-600 transition">D-III Teknologi Sipil</a></li>
            <li><a routerLink="/akademik/data-prodi/akuntansi" class="hover:text-blue-600 transition">D-III Akuntansi</a></li>
          </ul>
        </div>

        <!-- INFORMASI -->
        <div>
          <h3 class="font-bold mb-4 text-lg">Informasi</h3>
          <ul class="space-y-2 text-sm">
            <li><a routerLink="/akademik/jadwal" class="hover:text-blue-600 transition">Jadwal Kuliah</a></li>
            <li><a routerLink="/pmb" class="hover:text-blue-600 transition">PMB</a></li>
            <li><a routerLink="/aktivitas/organisasi" class="hover:text-blue-600 transition">Organisasi & UKM</a></li>
            <li><a routerLink="/karier" class="hover:text-blue-600 transition">Karier</a></li>
          </ul>
        </div>

      </div>
    </footer>

    <!-- BARIS PEMISAH PALING BAWAH -->
    <div class="bg-blue-900 text-white py-3 text-sm">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <!-- Sosial media -->
        <div class="flex gap-4 mb-2 md:mb-0">
          <lucide-icon [img]="Facebook" [size]="20" class="cursor-pointer hover:opacity-75"></lucide-icon>
          <lucide-icon [img]="Twitter" [size]="20" class="cursor-pointer hover:opacity-75"></lucide-icon>
          <lucide-icon [img]="Instagram" [size]="20" class="cursor-pointer hover:opacity-75"></lucide-icon>
          <lucide-icon [img]="Linkedin" [size]="20" class="cursor-pointer hover:opacity-75"></lucide-icon>
        </div>

        <!-- Copy -->
        <p class="text-center mb-2 md:mb-0">
          © 2025 Polinema PSDku Lumajang. All rights reserved.
        </p>

        <!-- Menu kanan -->
        <div class="flex gap-6">
          <a href="#" class="hover:underline">About this site</a>
          <a href="#" class="hover:underline">Privacy Policy</a>
        </div>

      </div>
    </div>
  `
})
export class FooterComponent {
  readonly MapPin = MapPin;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly Facebook = Facebook;
  readonly Twitter = Twitter;
  readonly Instagram = Instagram;
  readonly Linkedin = Linkedin;
}