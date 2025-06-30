import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { NewsDto } from '../../../../shared/interfaces/news.dto';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'news-section',
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    RouterModule,
    TranslateModule,
  ],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss',
  standalone: true,
})
export class NewsSectionComponent {
  news: NewsDto[] = [
    {
      thumbnail: './assets/images/logo-mobile.png',
      title: 'NEWS.ITEMS.0.TITLE',
      describtion: 'NEWS.ITEMS.0.DESCRIPTION',
      buttonLabel: 'NEWS.ITEMS.0.BUTTON',
      buttonLink: 'https://www.al-madina.com/article/908741/%D9%85%D8%AD%D9%84%D9%8A%D8%A7%D8%AA/%D8%A3%D9%85%D8%A7%D9%86%D8%A9-%D8%AD%D8%A7%D8%A6%D9%84-%D8%AA%D9%86%D9%81%D8%B0-38-%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D9%85%D8%AC%D8%AA%D9%85%D8%B9%D9%8A%D8%A9-%D9%85%D8%AA%D9%86%D9%88%D8%B9%D8%A9#:~:text=%D8%AE%D9%84%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D8%A8%D8%B9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D9%85%D9%86%202024%D9%85&text=%D9%86%D9%81%D8%B0%D8%AA%20%D8%A3%D9%85%D8%A7%D9%86%D8%A9%20%D9%85%D9%86%D8%B7%D9%82%D8%A9%20%D8%AD%D8%A7%D8%A6%D9%84%20%D8%AE%D9%84%D8%A7%D9%84,%D8%A7%D9%84%D9%88%D8%B9%D9%8A%20%D8%A7%D9%84%D9%85%D8%AC%D8%AA%D9%85%D8%B9%D9%8A%20%D9%88%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B3%D9%83%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9.',
    },
    {
      thumbnail: './assets/images/News_02.jpeg',
      title: 'NEWS.ITEMS.1.TITLE',
      describtion: 'NEWS.ITEMS.1.DESCRIPTION',
      buttonLabel: 'NEWS.ITEMS.1.BUTTON',
      buttonLink: 'https://www.alriyadh.com/2134154',
    },
    {
      thumbnail: './assets/images/News_01.jpeg',
      title: 'NEWS.ITEMS.2.TITLE',
      describtion: 'NEWS.ITEMS.2.DESCRIPTION',
      buttonLabel: 'NEWS.ITEMS.2.BUTTON',
      buttonLink: 'https://www.moi.gov.sa/wps/portal/Home/emirates/hael/contents/!ut/p/z0/fY1BC4JAFIT_Sh48ynu7PqyOmxBplyIC3cuyyqIb24om1s9vpXuXgW9mmAEJdUZZumeUMqhAer3YTs928NoFrmWmsCA6MeLnHV2OKK68zEVecLwzuOkJSpD_S2HFPsZRCpDt4GfzmaHqtXExrrrRU4zevF8_Ddj2djFr6NTqKGQJbhOOnBoV_p7y4DoRRV_7QLyH/',
    },
  ];

  responsiveNewsOptions: CarouselResponsiveOptions[] | undefined;
  constructor() {
    this.responsiveNewsOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
