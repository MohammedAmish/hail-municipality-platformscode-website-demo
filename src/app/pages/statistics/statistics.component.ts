import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

interface StatisticCard {
  icon: string;
  titleKey: string;
  valueKey: string;
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, NgChartsModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  currentLang: string;

  constructor(public translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  get isRtl(): boolean {
    return this.currentLang === 'ar';
  }

  statistics: StatisticCard[] = [
    {
      icon: 'assets/images/icon-user-group.svg',
      titleKey: 'STATISTICS.cards.users',
      valueKey: '000,000',
    },
    {
      icon: 'assets/images/icon-star.svg',
      titleKey: 'STATISTICS.cards.visits',
      valueKey: '000,000',
    },
    {
      icon: 'assets/images/icon-plus.svg',
      titleKey: 'STATISTICS.cards.pageviews',
      valueKey: '000,000',
    },
  ];

  // بيانات مخطط دائري رئيسي
  mainPieData: ChartConfiguration<'pie'> = {
    type: 'pie',
    data: {
      labels: [
        'STATISTICS.pie.label4',
        'STATISTICS.pie.label3',
        'STATISTICS.pie.label2',
        'STATISTICS.pie.label1',
      ],
      datasets: [
        {
          data: [40, 30, 20, 10],
          backgroundColor: ['#1B8354', '#A7E9C2', '#6FCF97', '#E5E7EB'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'bottom' },
      },
    },
  };

  // بيانات مخططات دائرية صغيرة (أنواع الأجهزة، نوع المتصفح، أكثر كلمات البحث)
  smallPieData: ChartConfiguration<'pie'>[] = [
    {
      type: 'pie',
      data: {
        labels: [
          'STATISTICS.pie.label4',
          'STATISTICS.pie.label3',
          'STATISTICS.pie.label2',
          'STATISTICS.pie.label1',
        ],
        datasets: [{ data: [35, 25, 25, 15], backgroundColor: ['#1B8354', '#A7E9C2', '#6FCF97', '#E5E7EB'] }],
      },
      options: { responsive: true, plugins: { legend: { display: true, position: 'bottom' } } },
    },
    {
      type: 'pie',
      data: {
        labels: [
          'STATISTICS.pie.label4',
          'STATISTICS.pie.label3',
          'STATISTICS.pie.label2',
          'STATISTICS.pie.label1',
        ],
        datasets: [{ data: [30, 30, 25, 15], backgroundColor: ['#1B8354', '#A7E9C2', '#6FCF97', '#E5E7EB'] }],
      },
      options: { responsive: true, plugins: { legend: { display: true, position: 'bottom' } } },
    },
    {
      type: 'pie',
      data: {
        labels: [
          'STATISTICS.pie.label4',
          'STATISTICS.pie.label3',
          'STATISTICS.pie.label2',
          'STATISTICS.pie.label1',
        ],
        datasets: [{ data: [25, 25, 30, 20], backgroundColor: ['#1B8354', '#A7E9C2', '#6FCF97', '#E5E7EB'] }],
      },
      options: { responsive: true, plugins: { legend: { display: true, position: 'bottom' } } },
    },
  ];

  // بيانات مخططات دونات سفلية (قيم فقط)
  donutData: ChartConfiguration<'doughnut'>[] = [
    {
      type: 'doughnut',
      data: {
        labels: [
          'STATISTICS.pie.label5',
          'STATISTICS.pie.label4',
          'STATISTICS.pie.label3',
          'STATISTICS.pie.label2',
          'STATISTICS.pie.label1',
        ],
        datasets: [{ data: [5, 20, 25, 30, 20], backgroundColor: ['#166534', '#1B8354', '#A7E9C2', '#6FCF97', '#E5E7EB'] }],
      },
      options: { responsive: true, plugins: { legend: { display: true, position: 'bottom' } } },
    },
    {
      type: 'doughnut',
      data: {
        labels: [
          'STATISTICS.pie.label5',
          'STATISTICS.pie.label4',
          'STATISTICS.pie.label3',
          'STATISTICS.pie.label2',
          'STATISTICS.pie.label1',
        ],
        datasets: [{ data: [10, 20, 30, 25, 15], backgroundColor: ['#166534', '#1B8354', '#A7E9C2', '#6FCF97', '#E5E7EB'] }],
      },
      options: { responsive: true, plugins: { legend: { display: true, position: 'bottom' } } },
    },
    {
      type: 'doughnut',
      data: {
        labels: [
          'STATISTICS.pie.label5',
          'STATISTICS.pie.label4',
          'STATISTICS.pie.label3',
          'STATISTICS.pie.label2',
          'STATISTICS.pie.label1',
        ],
        datasets: [{ data: [15, 25, 20, 25, 15], backgroundColor: ['#166534', '#1B8354', '#A7E9C2', '#6FCF97', '#E5E7EB'] }],
      },
      options: { responsive: true, plugins: { legend: { display: true, position: 'bottom' } } },
    },
    {
      type: 'doughnut',
      data: {
        labels: [
          'STATISTICS.pie.label5',
          'STATISTICS.pie.label4',
          'STATISTICS.pie.label3',
          'STATISTICS.pie.label2',
          'STATISTICS.pie.label1',
        ],
        datasets: [{ data: [20, 20, 20, 20, 20], backgroundColor: ['#166534', '#1B8354', '#A7E9C2', '#6FCF97', '#E5E7EB'] }],
      },
      options: { responsive: true, plugins: { legend: { display: true, position: 'bottom' } } },
    },
  ];

  // بيانات مخطط خطي
  lineChartData: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو'],
      datasets: [
        {
          label: this.translate.instant('STATISTICS.line.requests'),
          data: [100, 120, 150, 130, 170, 200, 180],
          borderColor: '#1B8354',
          backgroundColor: 'rgba(27,131,84,0.1)',
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'bottom' },
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  };
}
