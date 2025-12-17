import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  currentDate = new Date();

  constructor(private authService: AuthService) {}

  onLogout(): void {
    if (confirm('Apakah Anda yakin ingin keluar dari sistem?')) {
      this.authService.logout();
    }
  }
}
