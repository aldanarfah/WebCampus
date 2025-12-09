import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ti',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ti.component.html',
  styleUrls: ['./ti.component.css']
})
export class TIComponent {}
