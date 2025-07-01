import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MUNICIPALITIES, Municipality } from './municipalities.data';

@Component({
  selector: 'app-municipalities',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './municipalities.component.html',
  styleUrl: './municipalities.component.scss',
})
export class MunicipalitiesComponent {
  municipalities: Municipality[] = MUNICIPALITIES;

  openLocation(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
} 