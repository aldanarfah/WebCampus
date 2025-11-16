import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodi-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './prodi-layout.component.html',
  styleUrls: ['./prodi-layout.component.css']
})
export class ProdiLayoutComponent {}
