import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-akademik-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './akademik-home.component.html',
  styleUrl: './akademik-home.component.css'
})
export class AkademikHomeComponent {

}
