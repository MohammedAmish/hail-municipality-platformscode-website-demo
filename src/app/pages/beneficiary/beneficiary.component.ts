import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './beneficiary.component.html',
  styleUrl: './beneficiary.component.scss'
})
export class BeneficiaryComponent {
  aboutSections = [
    {
      title: 'BENEFICIARY.page.2024',
      link: '/assets/downloads/2024.pdf', // Update later with real file
    },
    {
      title: 'BENEFICIARY.page.2023',
      link: '/assets/downloads/2023.pdf',
    },
    {
      title: 'BENEFICIARY.page.2022',
      link: '/assets/downloads/2022.pdf',
    },
    {
      title: 'BENEFICIARY.page.2021',
      link: '/assets/downloads/2021.pdf',
    },
    {
      title: 'BENEFICIARY.page.2020',
      link: '/assets/downloads/2020.pdf',
    },
    {
      title: 'BENEFICIARY.page.2019',
      link: '/assets/downloads/2019.pdf',
    },
  ];

  downloadFile(fileUrl: string): void {
    if (!fileUrl) {
      alert('File not available yet.');
      return;
    }

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = '';
    anchor.target = '_blank';
    anchor.click();
  }
}
