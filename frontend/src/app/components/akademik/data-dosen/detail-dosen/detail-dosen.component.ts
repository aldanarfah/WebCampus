import { Component, AfterViewInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-detail-dosen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-dosen.component.html'
})
export class DetailDosenComponent implements AfterViewInit {
  @Input() dosen: any;
  @Output() close = new EventEmitter<void>();

  @ViewChild('lineChart') chartRef!: ElementRef<HTMLCanvasElement>;
  chart: any;

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
          label: 'Kehadiran (%)',
          data: [90, 85, 92, 70, 88, 95],
          borderColor: '#002D72',
          backgroundColor: 'rgba(0,45,114,0.3)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true }
        },
        scales: {
          y: { min: 0, max: 100 }
        }
      }
    });
  }

  closePopup() {
    this.close.emit();
  }
}
