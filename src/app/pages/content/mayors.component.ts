import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mayors',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './mayors.component.html',
  styleUrls: ['./mayors.component.scss'],
})
export class MayorsComponent {
  mayors = [
    'MAYORS.MAYOR_1',
    'MAYORS.MAYOR_2',
    'MAYORS.MAYOR_3',
    'MAYORS.MAYOR_4',
    'MAYORS.MAYOR_5',
    'MAYORS.MAYOR_6',
    'MAYORS.MAYOR_7',
    'MAYORS.MAYOR_8',
    'MAYORS.MAYOR_9',
  ];
}
