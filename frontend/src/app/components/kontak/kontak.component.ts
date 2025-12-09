import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kontak',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './kontak.component.html',
  styleUrls: ['./kontak.component.css']
})
export class KontakComponent {

  form = {
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  };

  submitForm() {
    console.log("Data terkirim:", this.form);

    alert("Pesan berhasil dikirim!");

    // Reset form
    this.form = {
      nama: '',
      email: '',
      subjek: '',
      pesan: ''
    };
  }
}
