import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RatingComponent } from './layout/rating/rating.component';
import { FeedbackComponent } from './layout/feedback/feedback.component';
import { CookiesBannerComponent } from './layout/cookies-banner/cookies-banner.component';
import { ChatbotComponent } from './layout/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TranslateModule,
    ButtonModule,
    FooterComponent,
    HeaderComponent,
    RatingComponent,
    FeedbackComponent,
    CookiesBannerComponent,
    ChatbotComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hail-Municipality';
  showLayout = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Scroll to top on route change
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Hide layout on 404 page only
        this.showLayout = !event.urlAfterRedirects.includes('page-not-found');
      });
  }
}
