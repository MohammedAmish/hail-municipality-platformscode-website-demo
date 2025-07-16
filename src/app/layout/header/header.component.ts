import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { CommonModule, DOCUMENT } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../../shared/services/localStorage.service';
import { AccessibilityService } from '../../shared/services/accessibility.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    ToolbarModule,
    MenubarModule,
    ButtonModule,
    BadgeModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  topbarItems: MenuItem[] | undefined;
  mainItems: MenuItem[] | undefined;
  @HostBinding('attr.dir') dir = 'rtl';

  constructor(
    private translate: TranslateService,
    private localStorageService: LocalStorageService,
    private accessibility: AccessibilityService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    translate.addLangs(['en', 'ar']);
    const saved = this.localStorageService.getItem('lang') || 'ar';
    this.switchLang(saved as 'en' | 'ar');
  }

  switchLang(lang: 'en' | 'ar') {
    this.translate.use(lang);
    this.localStorageService.setItem('lang', lang);
    this.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.dir = this.dir;
  }

  ngOnInit() {
    this.topbarItems = [
      { label: 'HEADER.TOPBAR.CONDITION', iconImage: 'assets/images/icon-cloud.svg' },
      { label: new Date().toLocaleDateString(), iconImage: 'assets/images/icon-calender.svg' },
      { label: new Date().toLocaleTimeString(), iconImage: 'assets/images/icon-clock.svg' },
      { label: 'HEADER.TOPBAR.CITY', iconImage: 'assets/images/icon-map-marker.svg' },
    ];

    this.mainItems = [
      { label: 'HEADER.MENU.HOME', routerLink: '/' },
      {
        label: 'HEADER.MENU.MUNICIPALITY',
        items: [
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.PRINCE', routerLink: '/princes' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.HEADS', routerLink: '/mayors' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.LOCATION', routerLink: '/hail-area' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.GEOGRAPHY', routerLink: '/geography' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.GUIDE', href: 'https://amanathail.gov.sa/new_portal/HailGuide' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.MUNICIPALITIES', routerLink: '/municipalities' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.MANAGEMENT', routerLink: '/departments' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.OPEN_DATA', routerLink: '/open-data' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.DATA_SHARING', routerLink: '/data-sharing' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.STRUCTURE', routerLink: '/organizational-structure' },
          { label: 'HEADER.MENU.MUNICIPALITY_ITEMS.SYSTEMS', routerLink: '/regulations' },
        ],
      },
      {
        label: 'HEADER.MENU.STRATEGY',
        items: [
          { label: 'HEADER.MENU.STRATEGY_ITEMS.VISION', routerLink: '/vision-mission' },
          { label: 'HEADER.MENU.STRATEGY_ITEMS.GOALS', routerLink: '/main-goals' },
          { label: 'HEADER.MENU.STRATEGY_ITEMS.AUDIT', routerLink: '/internal-audit' },
        ],
      },
      {
        label: 'HEADER.MENU.MAYOR',
        items: [
          { label: 'HEADER.MENU.MAYOR_ITEMS.MAYOR_INFO', routerLink: '/mayor-profile' },
          { label: 'HEADER.MENU.MAYOR_ITEMS.MAYOR_CONTACT', routerLink: '/mayor-contact' },
          { label: 'HEADER.MENU.MAYOR_ITEMS.MAYOR_ADMIN', routerLink: '/executive-office' },
        ],
      },
      {
        label: 'HEADER.MENU.NEWS',
        items: [
          { label: 'HEADER.MENU.NEWS_ITEMS.HAIL_NEWS', href: 'https://www.amanathail.gov.sa/new_portal/news?type=hail' },
          { label: 'HEADER.MENU.NEWS_ITEMS.MUNICIPALITY_NEWS', href: 'https://www.amanathail.gov.sa/new_portal/news?type=baldaia' },
        ],
      },
      {
        label: 'HEADER.MENU.SERVICES',
        items: [
          { label: 'HEADER.MENU.SERVICES_ITEMS.INDIVIDUALS', href: 'https://amanathail.gov.sa/new_portal/services?cat=individuals' },
          { label: 'HEADER.MENU.SERVICES_ITEMS.BUSINESS', href: 'https://amanathail.gov.sa/new_portal/services?cat=company' },
          { label: 'HEADER.MENU.SERVICES_ITEMS.GOVERNMENT', href: 'https://amanathail.gov.sa/new_portal/services?cat=government' },
          { label: 'HEADER.MENU.SERVICES_ITEMS.EMPLOYEES', href: 'https://amanathail.gov.sa/new_portal/services?cat=employee' },
        ],
      },
    ];
  }

  onSearchClick(event: Event) {
    this.router.navigate(['/search']);
  }

  increaseFont() {
    this.accessibility.increaseFont();
  }

  decreaseFont() {
    this.accessibility.decreaseFont();
  }

  resetFont() {
    this.accessibility.resetFont();
  }

  toggleContrast() {
    this.accessibility.toggleContrast();
  }
}
