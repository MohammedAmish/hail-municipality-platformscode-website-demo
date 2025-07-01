import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'content',
    loadComponent: () =>
      import('./pages/content/content.component').then(
        (m) => m.ContentComponent
      ),
  },
  {
    path: 'help-support',
    loadComponent: () =>
      import('./pages/help-support/help-support.component').then(
        (m) => m.HelpSupportComponent
      ),
  },
  {
    path: 'faqs',
    loadComponent: () =>
      import('./pages/faqs/faqs.component').then(
        (m) => m.FAQsComponent
      ),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: 'service',
    loadComponent: () =>
      import('./pages/service/service.component').then(
        (m) => m.ServiceComponent
      ),
  },
  {
    path: 'sitemap',
    loadComponent: () =>
      import('./pages/sitemap/sitemap.component').then(
        (m) => m.SitemapComponent
      ),
  },
];
