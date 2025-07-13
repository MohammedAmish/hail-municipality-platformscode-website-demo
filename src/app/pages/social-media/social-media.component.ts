import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
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
      title: 'SOCIALMEDIA.facebook',
      icon: 'assets/images/Icon-facebook.png',
      link: '/page-not-found',
    },
    {
      title: 'SOCIALMEDIA.youtube',
      icon: 'assets/images/Icon-youtube.png',
      link: 'https://www.youtube.com/channel/UCI8Xtgl1t-5dOpfPMvdpgCA',
    },
    {
      title: 'SOCIALMEDIA.x',
      icon: 'assets/images/Icon-x-g.png',
      link: 'https://x.com/amanat_hail',
    },
    {
      title: 'SOCIALMEDIA.instagram',
      icon: 'assets/images/Icon-instagram.png',
      link: 'https://www.instagram.com/amanat_hail',
    },
    {
      title: 'SOCIALMEDIA.linkedin',
      icon: 'assets/images/Icon-linkedin.png',
      link: 'https://www.linkedin.com/company/amanathail/',
    },
    {
      title: 'SOCIALMEDIA.snapchat',
      icon: 'assets/images/Icon-snapchat.png',
      link: 'https://www.snapchat.com/@amanat_hail',
    },
  ];
}
