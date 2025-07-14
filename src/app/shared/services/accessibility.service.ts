import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from './localStorage.service';

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  fontSize = 100;
  readonly minFontSize = 80;
  readonly maxFontSize = 150;
  isHighContrast = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorageService: LocalStorageService
  ) {
    this.loadSettings();
  }

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

  toggleContrast() {
    this.isHighContrast = !this.isHighContrast;
    this.localStorageService.setItem('contrast', this.isHighContrast.toString());
    this.updateContrastClass();
  }

  private loadSettings() {
    const savedFontSize = this.localStorageService.getItem('fontSize');
    const savedContrast = this.localStorageService.getItem('contrast');

    if (savedFontSize) {
      this.fontSize = +savedFontSize;
      this.applyFontSize();
    }

    this.isHighContrast = savedContrast === 'true';
    this.updateContrastClass();
  }

  private applyFontSize() {
    this.document.documentElement.style.fontSize = `${this.fontSize}%`;
    this.localStorageService.setItem('fontSize', this.fontSize.toString());
  }

  private updateContrastClass() {
    const body = this.document.body;
    if (this.isHighContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }
  }
}
