import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-e-participation',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './e-participation.component.html',
  styleUrls: ['./e-participation.component.scss']
})
export class EParticipationComponent {
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

  aboutSections = [
    {
      title: 'E-PARTICIPATION.cards.policy',
      link: 'https://amanathail.gov.sa/new_portal/Hail/HailHistory',
    },
    {
      title: 'E-PARTICIPATION.cards.consultations',
      link: 'https://amanathail.gov.sa/new_portal/Hail/organizational',
    },
    {
      title: 'E-PARTICIPATION.cards.co-creation',
      link: '/co-creation',
    },
    {
      title: 'E-PARTICIPATION.cards.open-data',
      link: '/open-data',
    },
    {
      title: 'E-PARTICIPATION.cards.complaints',
      link: '/',
    },
    {
      title: 'E-PARTICIPATION.cards.beneficiary',
      link: '/',
    },
    {
      title: 'E-PARTICIPATION.cards.statistics',
      link: '/',
    },
    {
      title: 'E-PARTICIPATION.cards.social-media',
      link: '/social-media',
    },
  ];
} 