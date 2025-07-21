import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-goals',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './main-goals.component.html',
  styleUrl: './main-goals.component.scss',
})
export class MainGoalsComponent {} 