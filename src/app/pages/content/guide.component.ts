import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.scss'
})
export class GuideComponent {
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

  guideSections = [
    {
      title: 'GUIDE.cards.heritage',
      icon: 'assets/images/icon-heritage.png',
      color: '#C0946E',
      link: '/',
    },
    {
      title: 'GUIDE.cards.tourism',
      icon: 'assets/images/icon-tourism.png',
      color: '#D2FDE9',
      link: '/',
    },
    {
      title: 'GUIDE.cards.parks',
      icon: 'assets/images/icon-parks.png',
      color: '#D9C2FB',
      link: '/',
    },
    {
      title: 'GUIDE.cards.services',
      icon: 'assets/images/icon-services.png',
      color: '#E3F0FF',
      link: '/',
    },
    {
      title: 'GUIDE.cards.shopping',
      icon: 'assets/images/icon-shopping.png',
      color: '#FDE28A',
      link: '/',
    },
  ];
}
