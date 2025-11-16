import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
selector: 'app-home-admin',
standalone: true,
imports: [CommonModule],
templateUrl: './home-admin.component.html',
styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
adminName = 'Administrator';


stats = [
{ title: 'Total Organisasi', value: 12 },
{ title: 'Total Anggota', value: 240 },
{ title: 'Event Berjalan', value: 4 },
];
}