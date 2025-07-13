import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultations',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule,],
  templateUrl: './consultations.component.html',
  styleUrl: './consultations.component.scss'
})
export class ConsultationsComponent {
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
      title: 'CONSULTATIONS.page.onlineplatform',
      link: 'https://istitlaa.ncc.gov.sa/ar/Pages/default.aspx',
    },
  ];

  aboutSections2 = [
    {
      title: 'COCREATION.page.tafaul',
      link: 'https://eparticipation.my.gov.sa/en/',
    },
  ];
}
