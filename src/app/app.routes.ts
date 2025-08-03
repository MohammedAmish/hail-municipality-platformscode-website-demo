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
    path: 'e-participation',
    loadComponent: () =>
      import('./pages/e-participation/e-participation.component').then((m) => m.EParticipationComponent),
  },
  {
    path: 'participation-policy',
    loadComponent: () =>
      import('./pages/participation-policy/participation-policy.component').then((m) => m.ParticipationPolicyComponent),
  },
  {
    path: 'consultations',
    loadComponent: () =>
      import('./pages/consultations/consultations.component').then((m) => m.ConsultationsComponent),
  },
  {
    path: 'co-creation',
    loadComponent: () =>
      import('./pages/co-creation/co-creation.component').then((m) => m.CoCreationComponent),
  },
  {
    path: 'open-data',
    loadComponent: () =>
      import('./pages/content/open-data.component').then((m) => m.OpenDataComponent),
  },
  {
    path: 'complaints-suggestions',
    loadComponent: () =>
      import('./pages/complaints-suggestions/complaints-suggestions.component').then((m) => m.ComplaintsSuggestionsComponent),
  },
  {
    path: 'beneficiary',
    loadComponent: () =>
      import('./pages/beneficiary/beneficiary.component').then((m) => m.BeneficiaryComponent),
  },
  {
    path: 'statistics',
    loadComponent: () =>
      import('./pages/statistics/statistics.component').then((m) => m.StatisticsComponent),
  },
  {
    path: 'social-media',
    loadComponent: () =>
      import('./pages/social-media/social-media.component').then((m) => m.SocialMediaComponent),
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
    path: 'guide',
    loadComponent: () =>
      import('./pages/content/guide.component').then((m) => m.GuideComponent),
  },
  {
    path: 'municipalities/:name',
    loadComponent: () => import('./pages/content/municipality-details.component').then(m => m.MunicipalityDetailsComponent),
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
  {
    path: 'organizational-structure',
    loadComponent: () =>
      import('./pages/content/organizational-structure.component').then((m) => m.OrganizationalStructureComponent),
  },
  {
  path: '**',
  loadComponent: () =>
    import('./pages/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent)
  }
];
