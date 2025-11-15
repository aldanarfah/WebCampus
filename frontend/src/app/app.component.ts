import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,      // jaga-jaga biar *ngIf, *ngFor, dll tetap jalan
    RouterOutlet,      // Angular 18 sudah support langsung
    HeaderComponent, 
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-white">
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'university-website';
}
