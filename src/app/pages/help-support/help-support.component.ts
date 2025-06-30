import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-help-support',
  imports: [TranslateModule, RouterModule],
  templateUrl: './help-support.component.html',
  styleUrl: './help-support.component.scss',
  standalone: true,
})
export class HelpSupportComponent {

}
