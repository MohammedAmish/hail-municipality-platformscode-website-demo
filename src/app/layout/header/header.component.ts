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

    this.mainItems = [/* your main menu definition */];
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
