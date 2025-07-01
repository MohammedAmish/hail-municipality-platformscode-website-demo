import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-geography',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './geography.component.html',
  styleUrl: './geography.component.scss',
})
export class GeographyComponent {} 