import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { AccessibilityService } from '../../shared/services/accessibility.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public accessibility: AccessibilityService) {}

  overviewLinks: { key: string; url: string }[] = [
    { key: 'ABOUT', url: '/about-us' },
    { key: 'PRIVACY', url: 'https://amanathail.gov.sa/new_portal/Hail/Policy' },
    { key: 'HOW_TO_USE', url: 'https://amanathail.gov.sa/new_portal/Hail/SafePolicy' },
    { key: 'NEWS_EVENTS', url: 'https://www.amanathail.gov.sa/new_portal/news?type=hail' },
    { key: 'SLA_STATS', url: 'https://balady.gov.sa/ar/terms-conditions' },
  ];

  importantLinks: { key: string; url: string }[] = [
    { key: 'NATIONAL_SERVICE', url: 'https://balady.gov.sa/ar' },
    { key: 'OPEN_GOV_DATA', url: '/data-sharing' },
    { key: 'NATIONAL_STRATEGY', url: '/content' },
    { key: 'OPEN_DATA_PORTAL', url: '/open-data' },
    { key: 'E_PARTICIPATION', url: '/e-participation' },
  ];

  contactLinks: { key: string; url: string }[] = [
    { key: 'CONTACT_US', url: '/contact-us' },
    { key: 'ENGAGE_WITH_US', url: '/help-support' },
    { key: 'SUBMIT_COMPLAINT', url: '/complaints-suggestions' },
    { key: 'REPORT_CORRUPTION', url: 'https://www.my.gov.sa/wps/portal/snp/content/reportcorruption' },
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
    { label: 'Toggle high contrast', icon: 'assets/images/icon-eye.svg' },
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

  isExternalLink(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
  }
}
