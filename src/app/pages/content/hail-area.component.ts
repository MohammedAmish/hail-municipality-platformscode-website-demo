import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hail-area',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hail-area.component.html',
  styleUrl: './hail-area.component.scss',
})
export class HailAreaComponent {} 