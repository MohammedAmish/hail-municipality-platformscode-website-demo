import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { AccessibilityService } from '../../shared/services/accessibility.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule, TranslateModule,],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public accessibility: AccessibilityService) {}
  
  overviewLinks: { key: string; routerLink: string }[] = [
    { key: 'ABOUT', routerLink: '/about-us' },
    { key: 'PRIVACY', routerLink: '/content' },
    { key: 'HOW_TO_USE', routerLink: '/page-not-found' },
    { key: 'NEWS_EVENTS', routerLink: '/content' },
    { key: 'SLA_STATS', routerLink: '/content' },
  ];

  importantLinks: { key: string; routerLink: string }[] = [
    { key: 'NATIONAL_SERVICE', routerLink: '/content' },
    { key: 'OPEN_GOV_DATA', routerLink: '/content' },
    { key: 'NATIONAL_STRATEGY', routerLink: '/content' },
    { key: 'OPEN_DATA_PORTAL', routerLink: '/content' },
    { key: 'E_PARTICIPATION', routerLink: '/e-participation' },
  ];

  contactLinks: { key: string; routerLink: string }[] = [
    { key: 'CONTACT_US', routerLink: '/contact-us' },
    { key: 'ENGAGE_WITH_US', routerLink: '/help-support' },
    { key: 'SUBMIT_COMPLAINT', routerLink: '/content' },
    { key: 'REPORT_CORRUPTION', routerLink: '/content' },
  ];

  socialIcons: { key: string; icon: string; url: string }[] = [
    {
      key: 'TWITTER',
      icon: 'assets/images/icon-x.svg',
      url: 'https://x.com/Amanat_Hail',
    },
    {
      key: 'LINKEDIN',
      icon: 'assets/images/icon-linkedin.svg',
      url: 'https://www.linkedin.com/company/amanathail/',
    },
    {
      key: 'INSTAGRAM',
      icon: 'assets/images/icon-instagram.svg',
      url: 'https://www.instagram.com/amanat_hail',
    },
  ];

  accessibilityTools: { label: string; icon: string }[] = [
    { label: 'Toggle high contrast', icon: 'assets/images/icon-view.svg' },
    { label: 'Increase text size', icon: 'assets/images/icon-increase.svg' },
    { label: 'Decrease text size', icon: 'assets/images/icon-decrease.svg' },
    { label: 'Reset text size', icon: 'assets/images/Reset-font.png' },
  ];

  onToolClick(label: string) {
    switch (label) {
      case 'Increase text size':
        this.accessibility.increaseFont();
        break;
      case 'Decrease text size':
        this.accessibility.decreaseFont();
        break;
      case 'Reset text size':
        this.accessibility.resetFont();
        break;
      case 'Toggle high contrast':
        this.accessibility.toggleContrast();
        break;
    }
  }
}
