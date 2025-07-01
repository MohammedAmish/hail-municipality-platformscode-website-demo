import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-princes',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './princes.component.html',
  styleUrl: './princes.component.scss',
})
export class PrincesComponent {} 