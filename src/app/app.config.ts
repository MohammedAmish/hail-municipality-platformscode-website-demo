import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './shared/services/translate.loader';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

// Firebase + AngularFire imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics'; // ✅ Analytics import

import { firebaseConfig } from './firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [
    // Firebase core services
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()), // ✅ Add Analytics here

    // Animations & Theme
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'dga-dark',
          cssLayer: {
            name: 'primeng',
            order: 'base, tailwind-base, tailwind-utilities, styles, components, primeng, theme',
          },
        },
      },
      inputVariant: 'filled',
      zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100,
      },
    }),

    // Angular Router & HTTP
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),

    // Translation module
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
