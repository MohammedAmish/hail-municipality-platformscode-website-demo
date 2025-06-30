import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
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
      title: 'ABOUTUS.cards.about',
      icon: 'assets/images/Icon-about.png',
      link: 'https://amanathail.gov.sa/new_portal/Hail/HailHistory',
    },
    {
      title: 'ABOUTUS.cards.structure',
      icon: 'assets/images/Icon-structure.png',
      link: 'https://amanathail.gov.sa/new_portal/Hail/organizational',
    },
    {
      title: 'ABOUTUS.cards.strategy',
      icon: 'assets/images/Icon-strategy.png',
      link: 'https://amanathail.gov.sa/new_portal/Hail/OurVision',
    },
    {
      title: 'ABOUTUS.cards.budget',
      icon: 'assets/images/Icon-budget.png',
      link: '/',
    },
    {
      title: 'ABOUTUS.cards.tenders',
      icon: 'assets/images/Icon-tenders.png',
      link: '/',
    },
    {
      title: 'ABOUTUS.cards.participation',
      icon: 'assets/images/Icon-participation.png',
      link: '/',
    },
    {
      title: 'ABOUTUS.cards.partners',
      icon: 'assets/images/Icon-partners.png',
      link: '/',
    },
    {
      title: 'ABOUTUS.cards.sustainable',
      icon: 'assets/images/Icon-sustainable.png',
      link: '/',
    },
    {
      title: 'ABOUTUS.cards.careers',
      icon: 'assets/images/Icon-careers.png',
      link: '/',
    },
    {
      title: 'ABOUTUS.cards.news',
      icon: 'assets/images/Icon-news.png',
      link: 'https://www.amanathail.gov.sa/new_portal/news',
    },
    {
      title: 'ABOUTUS.cards.contact',
      icon: 'assets/images/Icon-contact.png',
      link: '/contact-us',
    },
  ];
}
