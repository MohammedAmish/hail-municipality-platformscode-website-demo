import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-internal-audit',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './internal-audit.component.html',
  styleUrl: './internal-audit.component.scss',
})
export class InternalAuditComponent {} 