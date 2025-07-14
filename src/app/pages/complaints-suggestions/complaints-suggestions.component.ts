import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-complaints-suggestions',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './complaints-suggestions.component.html',
  styleUrl: './complaints-suggestions.component.scss'
})
export class ComplaintsSuggestionsComponent {
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
        title: 'COMPLAINTS.page.complaints',
        link: '/page-not-found',
      },
      {
        title: 'COMPLAINTS.page.filingreport',
        link: '/page-not-found',
      },
      {
        title: 'COMPLAINTS.page.requests',
        link: '/page-not-found',
      },
      {
        title: 'COMPLAINTS.page.inquiries',
        link: '/page-not-found',
      },
      {
        title: 'COMPLAINTS.page.escalations',
        link: '/page-not-found',
      },
    ];
}
