import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RatingComponent } from './layout/rating/rating.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, FooterComponent, HeaderComponent, RatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hail-Municipality';
}
