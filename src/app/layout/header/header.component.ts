import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { CommonModule, DOCUMENT } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../../shared/services/localStorage.service';
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
  weather = {
    condition: 'Cloudy',
    date: '3-Sep-2024',
    time: '2:30 PM',
    city: 'Al-Riyadh',
  };
  @HostBinding('attr.dir') dir = 'rtl';

  fontSize = 100;
  readonly minFontSize = 80;
  readonly maxFontSize = 150;
  isHighContrast = false;

  constructor(
    private translate: TranslateService,
    private localStorageService: LocalStorageService,
    @Inject(DOCUMENT) private document: Document
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

  toggleContrast(): void {
    this.isHighContrast = !this.isHighContrast;
    this.localStorageService.setItem('contrast', this.isHighContrast.toString());
    this.updateContrastClass();
  }

  private loadContrastSetting(): void {
    const savedContrast = this.localStorageService.getItem('contrast');
    this.isHighContrast = savedContrast === 'true';
    this.updateContrastClass();
  }

  private updateContrastClass(): void {
    const body = this.document.body;
    if (this.isHighContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }
  }

  ngOnInit() {
    
    this.loadContrastSetting();
    const savedFontSize = this.localStorageService.getItem('fontSize');

    if (savedFontSize) {
      this.fontSize = +savedFontSize;
      this.applyFontSize();
    }

    

    this.topbarItems = [
      {
        label: 'HEADER.TOPBAR.CONDITION',
        iconImage: 'assets/images/icon-cloud.svg',
      },
      {
        label: new Date().toLocaleDateString(),
        iconImage: 'assets/images/icon-calender.svg',
      },
      {
        label: new Date().toLocaleTimeString(),
        iconImage: 'assets/images/icon-clock.svg',
      },
      {
        label: 'HEADER.TOPBAR.CITY',
        iconImage: 'assets/images/icon-map-marker.svg',
      },
    ];

    this.mainItems = [
      { label: 'HEADER.MENU.HOME', routerLink: '/' },
      { label: 'HEADER.MENU.MUNICIPALITY',
        items: [
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.PRINCE',
            href: 'https://amanathail.gov.sa/new_portal/Hail/HailPrinces',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.HEADS',
            href: 'https://amanathail.gov.sa/new_portal/Hail/MayorsMunic',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.LOCATION',
            href: 'https://amanathail.gov.sa/new_portal/Hail/AboutHail',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.GEOGRAPHY',
            href: 'https://amanathail.gov.sa/new_portal/Hail/HailHistory',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.GUIDE',
            href: 'https://amanathail.gov.sa/new_portal/HailGuide',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.MUNICIPALITIES',
            href: 'https://amanathail.gov.sa/new_portal/Municipalities',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.MANAGEMENT',
            href: 'https://amanathail.gov.sa/new_portal/Departments',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.OPEN_DATA',
            href: 'https://amanathail.gov.sa/new_portal/Hail/OpenData',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.DATA_SHARING',
            href: 'https://hailportal.amanathail.gov.sa/Open-Source',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.STRUCTURE',
            href: 'https://amanathail.gov.sa/new_portal/Hail/organizational',
          },
          {
            label:'HEADER.MENU.MUNICIPALITY_ITEMS.SYSTEMS',
            href: 'https://amanathail.gov.sa/new_portal/Hail/regulations',
          },
        ],
      },
      { label: 'HEADER.MENU.STRATEGY',
         items: [
          {
            label:'HEADER.MENU.STRATEGY_ITEMS.VISION',
            href: 'https://amanathail.gov.sa/new_portal/Hail/OurVision',
          },
          {
            label:'HEADER.MENU.STRATEGY_ITEMS.GOALS',
            href: 'https://amanathail.gov.sa/new_portal/Hail/OurGoals',
          },
          {
            label:'HEADER.MENU.STRATEGY_ITEMS.AUDIT',
            href: 'https://amanathail.gov.sa/new_portal/Hail/InternalAudit',
          },
        ],
      },
      { label: 'HEADER.MENU.MAYOR',
         items: [
          {
            label:'HEADER.MENU.MAYOR_ITEMS.MAYOR_INFO',
            href: 'https://amanathail.gov.sa/new_portal/Hail/MayorCV',
          },
          {
            label:'HEADER.MENU.MAYOR_ITEMS.MAYOR_CONTACT',
            href: 'https://amanathail.gov.sa/new_portal/Hail/MayorContact',
          },
          {
            label:'HEADER.MENU.MAYOR_ITEMS.MAYOR_ADMIN',
            href: 'https://amanathail.gov.sa/new_portal/Hail/MayorOfficeAdmin',
          },
        ],
      },
      {
        label: 'HEADER.MENU.NEWS',
        items: [
          {
            label:'HEADER.MENU.NEWS_ITEMS.HAIL_NEWS',
            href: 'https://www.amanathail.gov.sa/new_portal/news?type=hail',
          },
          {
            label:'HEADER.MENU.NEWS_ITEMS.MUNICIPALITY_NEWS',
            href: 'https://www.amanathail.gov.sa/new_portal/news?type=baldaia',
          },
        ],
      },
      {
        label: 'HEADER.MENU.SERVICES',
        items: [
          {
            label:'HEADER.MENU.SERVICES_ITEMS.INDIVIDUALS',
            href: 'https://amanathail.gov.sa/new_portal/services?cat=individuals',
          },
          {
            label:'HEADER.MENU.SERVICES_ITEMS.BUSINESS',
            href: 'https://amanathail.gov.sa/new_portal/services?cat=company',
          },
          {
            label:'HEADER.MENU.SERVICES_ITEMS.GOVERNMENT',
            href: 'https://amanathail.gov.sa/new_portal/services?cat=government',
          },
          {
            label:'HEADER.MENU.SERVICES_ITEMS.EMPLOYEES',
            href: 'https://amanathail.gov.sa/new_portal/services?cat=employee',
          },
        ],
      },
    ];
  }

  onSearchClick(event: Event) {}

  increaseFont() {
    if (this.fontSize < this.maxFontSize) {
      this.fontSize += 10;
      this.applyFontSize();
    }
  }

  decreaseFont() {
    if (this.fontSize > this.minFontSize) {
      this.fontSize -= 10;
      this.applyFontSize();
    }
  }

  resetFont() {
  this.fontSize = 100;
  this.applyFontSize();
  }

  applyFontSize() {
    this.document.documentElement.style.fontSize = `${this.fontSize}%`;
    this.localStorageService.setItem('fontSize', this.fontSize.toString());
  }
}
