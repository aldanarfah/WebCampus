import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-akuntansi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './akuntansi.component.html',
  styleUrls: ['./akuntansi.component.css']
})
export class AkuntansiComponent {}
