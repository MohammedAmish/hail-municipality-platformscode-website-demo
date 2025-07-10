import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MUNICIPALITIES } from '../content/municipalities.data';

// عناوين الصفحات من sitemap
const PAGE_TITLES = [
  { title: 'SITEMAP.page.home', link: '/' },
  { title: 'SITEMAP.page.aboutus', link: '/about-us' },
  { title: 'SITEMAP.page.contactus', link: '/contact-us' },
  { title: 'SITEMAP.page.faq', link: '/faqs' },
  { title: 'SITEMAP.page.help', link: '/help-support' },
  { title: 'SITEMAP.page.content', link: '/content' },
];

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query = '';
  results: Array<{title: string, description: string, type: string, link?: string, titleText: string, descriptionText: string}> = [];

  constructor(private translate: TranslateService) {}

  // بيانات الأخبار (mock)
  news = [
    {
      title: 'NEWS.ITEMS.0.TITLE',
      description: 'NEWS.ITEMS.0.DESCRIPTION',
      type: 'الأخبار',
      link: 'https://www.al-madina.com/article/908741/...'
    },
    {
      title: 'NEWS.ITEMS.1.TITLE',
      description: 'NEWS.ITEMS.1.DESCRIPTION',
      type: 'الأخبار',
      link: 'https://www.alriyadh.com/2134154'
    },
    {
      title: 'NEWS.ITEMS.2.TITLE',
      description: 'NEWS.ITEMS.2.DESCRIPTION',
      type: 'الأخبار',
      link: 'https://www.moi.gov.sa/wps/portal/Home/emirates/hael/contents/...'
    },
  ];

  // بيانات الخدمات (mock)
  services = [
    {
      title: 'SERVICES.ITEMS.0.TITLE',
      description: 'SERVICES.ITEMS.0.DESCRIPTION',
      type: 'الخدمات',
      link: '/service'
    },
    {
      title: 'SERVICES.ITEMS.1.TITLE',
      description: 'SERVICES.ITEMS.1.DESCRIPTION',
      type: 'الخدمات',
      link: 'https://balady.gov.sa/ar/services/إصدار-رخصة-تجارية'
    },
    // ... أضف بقية الخدمات إذا رغبت
  ];

  // عن الأمانة
  about = [
    {
      title: 'ABOUT.TITLE',
      description: 'ABOUT.TEXT',
      type: 'عن الأمانة',
      link: '/about-us'
    }
  ];

  // البلديات
  municipalities = MUNICIPALITIES.map(m => ({
    title: `municipalities.${m.key}.name`,
    description: `PHONE: ${m.phone} | CENTRAL: ${m.central} | FAX: ${m.fax}`,
    type: 'البلديات',
    link: '/municipalities'
  }));

  // عناوين الصفحات
  pageTitles = PAGE_TITLES.map(p => ({
    title: p.title,
    description: '',
    type: 'عناوين الصفحات',
    link: p.link
  }));

  onSearch() {
    const q = this.query.trim().toLowerCase();
    if (!q) {
      this.results = [];
      return;
    }
    // البحث في جميع المصادر مع الترجمة الفعلية
    const all = [
      ...this.news.map(r => ({
        ...r,
        titleText: this.translate.instant(r.title),
        descriptionText: this.translate.instant(r.description)
      })),
      ...this.services.map(r => ({
        ...r,
        titleText: this.translate.instant(r.title),
        descriptionText: this.translate.instant(r.description)
      })),
      ...this.about.map(r => ({
        ...r,
        titleText: this.translate.instant(r.title),
        descriptionText: this.translate.instant(r.description)
      })),
      ...this.municipalities.map(r => ({
        ...r,
        titleText: this.translate.instant(r.title),
        descriptionText: r.description
      })),
      ...this.pageTitles.map(r => ({
        ...r,
        titleText: this.translate.instant(r.title),
        descriptionText: ''
      })),
    ];
    this.results = all.filter(r =>
      r.titleText.toLowerCase().includes(q) ||
      r.descriptionText.toLowerCase().includes(q)
    );
  }
} 