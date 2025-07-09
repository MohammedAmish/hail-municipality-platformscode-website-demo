import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-internal-audit',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './internal-audit.component.html',
  styleUrl: './internal-audit.component.scss',
})
export class InternalAuditComponent {} 