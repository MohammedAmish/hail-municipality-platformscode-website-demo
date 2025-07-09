import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mayor-profile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mayor-profile.component.html',
  styleUrl: './mayor-profile.component.scss',
})
export class MayorProfileComponent {} 