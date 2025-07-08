import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-goals',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './main-goals.component.html',
  styleUrl: './main-goals.component.scss',
})
export class MainGoalsComponent {} 