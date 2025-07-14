import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RatingComponent } from './layout/rating/rating.component';
import { FeedbackComponent } from './layout/feedback/feedback.component';
import { CookiesBannerComponent } from './layout/cookies-banner/cookies-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    FooterComponent,
    HeaderComponent,
    RatingComponent,
    FeedbackComponent,
    CookiesBannerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hail-Municipality';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
}
