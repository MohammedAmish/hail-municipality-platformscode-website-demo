import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-open-data',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './open-data.component.html',
  styleUrl: './open-data.component.scss',
})
export class OpenDataComponent {
  selectedTab = 0;
} 