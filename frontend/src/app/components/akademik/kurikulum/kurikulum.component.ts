import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kurikulum',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './kurikulum.component.html',
  styleUrls: ['./kurikulum.component.css']
})
export class KurikulumComponent {}
