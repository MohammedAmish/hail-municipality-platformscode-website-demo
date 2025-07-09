import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cookies-banner',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './cookies-banner.component.html',
})
export class CookiesBannerComponent implements OnInit {
  consentGiven = false;
  isLoading = true;
  step: 'initial' | 'manage' | 'confirmation' = 'initial';

  performance = true;
  functional = true;
  targeting = true;

  ngOnInit() {
    this.consentGiven = localStorage.getItem('cookieConsent') === 'true';
    this.isLoading = false;
  }

  acceptAll() {
    this.setConsent({ performance: true, functional: true, targeting: true });
  }

  rejectAll() {
    this.setConsent({ performance: false, functional: false, targeting: false });
  }

  savePreferences() {
    this.setConsent({
      performance: this.performance,
      functional: this.functional,
      targeting: this.targeting,
    });
  }

  undo() {
    localStorage.removeItem('cookieConsent');
    this.step = 'initial';
    this.consentGiven = false;
  }

  close() {
    this.consentGiven = true;
  }

  private setConsent(prefs: { performance: boolean; functional: boolean; targeting: boolean }) {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
    this.step = 'confirmation';
    this.consentGiven = false;
  }
}
