import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-help-support',
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: './help-support.component.html',
  styleUrl: './help-support.component.scss',
  standalone: true,
})
export class HelpSupportComponent {
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
}
