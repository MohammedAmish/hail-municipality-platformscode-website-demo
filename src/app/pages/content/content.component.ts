import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-content',
  imports: [TranslateModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true,
})
export class ContentComponent {}
