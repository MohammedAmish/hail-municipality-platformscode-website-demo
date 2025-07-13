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
  {
    path: 'page-not-found',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent),
  },
  {
    path: 'princes',
    loadComponent: () =>
      import('./pages/content/princes.component').then((m) => m.PrincesComponent),
  },
  {
    path: 'mayors',
    loadComponent: () =>
      import('./pages/content/mayors.component').then((m) => m.MayorsComponent),
  },
  {
    path: 'hail-area',
    loadComponent: () =>
      import('./pages/content/hail-area.component').then((m) => m.HailAreaComponent),
  },
  {
    path: 'geography',
    loadComponent: () =>
      import('./pages/content/geography.component').then((m) => m.GeographyComponent),
  },
  {
    path: 'municipalities',
    loadComponent: () =>
      import('./pages/content/municipalities.component').then((m) => m.MunicipalitiesComponent),
  },
  {
    path: 'open-data',
    loadComponent: () =>
      import('./pages/content/open-data.component').then((m) => m.OpenDataComponent),
  },
  {
    path: 'municipalities/:name',
    loadComponent: () => import('./pages/content/municipality-details.component').then(m => m.MunicipalityDetailsComponent),
  },
  {
    path: 'e-participation',
    loadComponent: () =>
      import('./pages/e-participation/e-participation.component').then((m) => m.EParticipationComponent),
  },
  {
    path: 'social-media',
    loadComponent: () =>
      import('./pages/social-media/social-media.component').then((m) => m.SocialMediaComponent),
  },
   {
    path: 'co-creation',
    loadComponent: () =>
      import('./pages/co-creation/co-creation.component').then((m) => m.CoCreationComponent),
  },
  {
    path: 'vision-mission',
    loadComponent: () =>
      import('./pages/content/vision-mission.component').then((m) => m.VisionMissionComponent),
  },
  {
    path: 'main-goals',
    loadComponent: () =>
      import('./pages/content/main-goals.component').then((m) => m.MainGoalsComponent),
  },
  {
    path: 'internal-audit',
    loadComponent: () =>
      import('./pages/content/internal-audit.component').then((m) => m.InternalAuditComponent),
  },
  {
    path: 'mayor-profile',
    loadComponent: () =>
      import('./pages/content/mayor-profile.component').then((m) => m.MayorProfileComponent),
  },
  {
    path: 'mayor-contact',
    loadComponent: () =>
      import('./pages/content/mayor-contact.component').then((m) => m.MayorContactComponent),
  },
  {
    path: 'executive-office',
    loadComponent: () =>
      import('./pages/content/executive-office.component').then((m) => m.ExecutiveOfficeComponent),
  },
  {
    path: 'data-sharing',
    loadComponent: () =>
      import('./pages/content/data-sharing.component').then((m) => m.DataSharingComponent),
  },
  {
    path: 'regulations',
    loadComponent: () => import('./pages/content/regulations.component').then((m) => m.RegulationsComponent),
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.component').then((m) => m.SearchComponent),
  },
  {
    path: 'departments',
    loadComponent: () => import('./pages/content/departments.component').then(m => m.DepartmentsComponent)
  },
];
