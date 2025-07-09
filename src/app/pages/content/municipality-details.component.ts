import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { MUNICIPALITIES, Municipality } from './municipalities.data';

@Component({
  selector: 'app-municipality-details',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './municipality-details.component.html',
  styleUrl: './municipality-details.component.scss',
})
export class MunicipalityDetailsComponent implements OnDestroy {
  municipality?: Municipality;
  currentLang: string;
  private langSub: any;

  constructor(private route: ActivatedRoute, public translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'ar';
    this.langSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
    });
    this.route.paramMap.subscribe(params => {
      const key = params.get('name');
      this.municipality = MUNICIPALITIES.find(m => m.key === key);
    });
  }

  ngOnDestroy() {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
} 