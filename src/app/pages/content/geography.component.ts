import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-geography',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './geography.component.html',
  styleUrl: './geography.component.scss',
})
export class GeographyComponent {} 