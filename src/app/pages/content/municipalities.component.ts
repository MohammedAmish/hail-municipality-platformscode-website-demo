import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MUNICIPALITIES, Municipality } from './municipalities.data';

@Component({
  selector: 'app-municipalities',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './municipalities.component.html',
  styleUrl: './municipalities.component.scss',
})
export class MunicipalitiesComponent {
  municipalities: Municipality[] = MUNICIPALITIES;

  constructor(public translate: TranslateService) {}

  get currentLang() {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  openLocation(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
} 