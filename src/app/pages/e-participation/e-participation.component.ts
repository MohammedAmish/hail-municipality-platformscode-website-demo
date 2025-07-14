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
      link: '/participation-policy',
    },
    {
      title: 'E-PARTICIPATION.cards.consultations',
      link: '/consultations',
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
      link: '/complaints-suggestions',
    },
    {
      title: 'E-PARTICIPATION.cards.beneficiary',
      link: '/beneficiary',
    },
    {
      title: 'E-PARTICIPATION.cards.statistics',
      link: '/statistics',
    },
    {
      title: 'E-PARTICIPATION.cards.social-media',
      link: '/social-media',
    },
  ];
} 