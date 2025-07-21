import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.scss',
})
export class VisionMissionComponent {} 