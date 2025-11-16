import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodi-default',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './prodi-default.component.html',
  styleUrls: ['./prodi-default.component.css']
})
export class ProdiDefaultComponent {}
