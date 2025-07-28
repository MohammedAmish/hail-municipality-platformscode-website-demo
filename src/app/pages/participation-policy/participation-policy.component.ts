import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-participation-policy',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './participation-policy.component.html',
  styleUrl: './participation-policy.component.scss'
})
export class ParticipationPolicyComponent {

}
