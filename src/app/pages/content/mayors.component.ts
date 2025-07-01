import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mayors',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mayors.component.html',
  styleUrl: './mayors.component.scss',
})
export class MayorsComponent {} 