import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

interface OrgMember {
  nameKey: string;
  positionKey: string;
  image: string;
}

@Component({
  selector: 'app-organizational-structure',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './organizational-structure.component.html',
  styleUrl: './organizational-structure.component.scss',
})
export class OrganizationalStructureComponent {
  mayor: OrgMember = {
    nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.MAYOR',
    positionKey: 'ORGANIZATIONAL_STRUCTURE.MAYOR',
    image: 'https://amanathail.gov.sa/new_portal/assets/organizational/Amin.jpg',
  };

  leftMembers: OrgMember[] = [
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.PROJECTS',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.PROJECTS',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/محسن بن بناصر بن لبده.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.URBAN',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.URBAN',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/عبدالله عيادة مذود العبيكة1.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.MUNICIPALITIES',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.MUNICIPALITIES',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/د. نواف خلف.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.INVESTMENT',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.INVESTMENT',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/تركي فتحي الزغبي.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.MEDIA',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.MEDIA',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/سعود العلي.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.HR',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.HR',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/عميش غازي عميش الشمري.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.EXECUTIVE',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.EXECUTIVE',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/أمل سبيل العنزي.jpg',
    },
  ];

  rightMembers: OrgMember[] = [
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.SERVICES',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.SERVICES',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/أحمد-موسى-أحمد-المرشدي_1.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.STRATEGY',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.STRATEGY',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/إبراهيم فهد سبيل الحربي.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.HOUSING',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.HOUSING',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/فوزان الفوزان.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.GOVERNANCE',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.GOVERNANCE',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/عطالله عزيز الشمري.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.FINANCE',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.FINANCE',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/حسين الجارمي.jpg',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.IT',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.IT',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/عبداللة_الباتع.png',
    },
    {
      nameKey: 'ORGANIZATIONAL_STRUCTURE.NAMES.MAYOR_OFFICE',
      positionKey: 'ORGANIZATIONAL_STRUCTURE.POSITIONS.MAYOR_OFFICE',
      image: 'https://amanathail.gov.sa/new_portal/assets/organizational/سعود الفويس.jpg',
    },
  ];
} 