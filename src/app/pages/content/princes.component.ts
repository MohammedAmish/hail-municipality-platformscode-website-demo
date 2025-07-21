import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-princes',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './princes.component.html',
  styleUrls: ['./princes.component.scss'],
})
export class PrincesComponent {
  princes = [
    'PRINCES.PRINCE_1',
    'PRINCES.PRINCE_2',
    'PRINCES.PRINCE_3',
    'PRINCES.PRINCE_4',
    'PRINCES.PRINCE_5',
    'PRINCES.PRINCE_6',
    'PRINCES.PRINCE_7',
    'PRINCES.PRINCE_8',
  ];
}
