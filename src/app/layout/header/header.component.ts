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
import { AuthService } from '../../shared/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ToolbarModule,
    MenubarModule,
    ButtonModule,
    BadgeModule,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  topbarItems: MenuItem[] | undefined;
  mainItems: MenuItem[] | undefined;
  @HostBinding('attr.dir') dir = 'rtl';

  user: any = null;
  email = '';
  password = '';
  loginError: string = '';
  showLoginForm = false;
  loading = false;
  confirmingLogout = false;

  constructor(
    private translate: TranslateService,
    private localStorageService: LocalStorageService,
    private accessibility: AccessibilityService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private authService: AuthService
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
      // Add your other main menu items here...
    ];

    this.authService.user$.subscribe(user => {
      this.user = user;
      if (user) {
        // Clear login form on successful login
        this.email = '';
        this.password = '';
        this.loginError = '';
        this.showLoginForm = false;
      }
    });
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

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
    this.loginError = '';
  }

  loginWithEmail() {
    if (!this.email || !this.password) {
      this.loginError = 'Please enter email and password';
      return;
    }
    this.loading = true;
    this.authService.loginWithEmail(this.email, this.password).then(result => {
      this.user = result.user;
      this.loginError = '';
      this.showLoginForm = false;
    }).catch(err => {
      this.loginError = err.message;
    }).finally(() => {
      this.loading = false;
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.user = null;
      this.email = '';
      this.password = '';
    }).catch(err => {
      console.error('Logout failed', err);
    });
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  authAction() {
    if (this.isLoggedIn) {
      this.confirmingLogout = true;
    } else {
      this.toggleLoginForm();
    }
  }

  confirmLogout(confirmed: boolean) {
  if (confirmed) {
    this.authService.logout().then(() => {
      this.user = null;
      this.email = '';
      this.password = '';
    }).catch(err => {
      console.error('Logout failed', err);
    });
  }
  this.confirmingLogout = false;
  }
}
