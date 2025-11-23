import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Search,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    importProvidersFrom(
      CommonModule,
      LucideAngularModule.pick({
        Search,
        GraduationCap,
        Phone,
        Mail,
        MapPin,
        Facebook,
        Twitter,
        Instagram,
        Linkedin,
      })
    ),
  ],
}).catch(err => console.error(err));
