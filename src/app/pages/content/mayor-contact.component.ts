import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mayor-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './mayor-contact.component.html',
  styleUrls: ['./mayor-contact.component.scss']
})
export class MayorContactComponent {} 