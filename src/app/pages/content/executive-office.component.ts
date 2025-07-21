import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-executive-office',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './executive-office.component.html',
  styleUrls: ['./executive-office.component.scss']
})
export class ExecutiveOfficeComponent {} 