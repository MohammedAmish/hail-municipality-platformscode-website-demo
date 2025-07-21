import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hail-area',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './hail-area.component.html',
  styleUrl: './hail-area.component.scss',
})
export class HailAreaComponent {} 