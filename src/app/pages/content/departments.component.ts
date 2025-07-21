import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

interface Department {
  nameAr: string;
  nameEn: string;
  managerAr: string;
  managerEn: string;
  contact: string;
  addressAr: string;
  addressEn: string;
  link?: string;
}

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {
  lang: 'ar' | 'en';
  departments: Department[] = [
    {
      nameAr: 'مكتب الأمين',
      nameEn: 'Mayor’s Office',
      managerAr: 'المهندس سلطان بن حامد الزايدي',
      managerEn: 'Eng. Sultan bin Hamad Al-Zaidi',
      contact: '016/5320144',
      addressAr: 'امانةحائل-الدور الثاني',
      addressEn: 'Hail Municipality - Second Floor',
      link: 'https://goo.gl/maps/8dDNRH23K6h58suz8',
    },
    {
      nameAr: 'الادارة العامة لتقنية المعلومات',
      nameEn: 'General Department of Information Technology',
      managerAr: 'م / احمد الطويرب',
      managerEn: 'Eng. Ahmed Al-Tuwaireb',
      contact: '#',
      addressAr: 'امانة حائل',
      addressEn: 'Hail Municipality',
      link: 'https://goo.gl/maps/4gxvz7fEc5yry5ZP8',
    },
    {
      nameAr: 'إدارة الأمن السيبراني',
      nameEn: 'Cybersecurity Department',
      managerAr: 'م/ مجول خلف الشمري',
      managerEn: 'Eng. Majoul Khalaf Al-Shammari',
      contact: '',
      addressAr: 'مبنى تقنية المعلومات الدور الثاني',
      addressEn: 'IT Building, Second Floor',
      link: 'https://goo.gl/maps/4gxvz7fEc5yry5ZP8',
    },
    {
      nameAr: 'وكالة الاستثمار بامانة منطقة حائل',
      nameEn: 'Investment Agency at Hail Municipality',
      managerAr: 'د / نواف خلف السحيمان',
      managerEn: 'Dr. Nawaf Khalaf Al-Suhaiman',
      contact: '',
      addressAr: 'طريق الملك عبدالعزيز',
      addressEn: 'King Abdulaziz Road',
      link: 'https://goo.gl/maps/5Lj8zs7vkxHxHZXX7',
    },
    {
      nameAr: 'الاداره العامة للحدائق والتجميل',
      nameEn: 'General Department of Parks and Beautification',
      managerAr: 'م / رايد عبدالرحمن السعيد',
      managerEn: 'Eng. Raid Abdulrahman Al-Saeed',
      contact: '',
      addressAr: 'طريق مكة المكرمة ,حائل',
      addressEn: 'Makkah Road, Hail',
      link: 'https://goo.gl/maps/ri3LJvuhCNJmsDRH6',
    },
    {
      nameAr: 'الإدارة العامة للمراجعة الداخلية',
      nameEn: 'General Department of Internal Audit',
      managerAr: 'ا / راكان بن سعود الرفدي',
      managerEn: 'Mr. Rakan bin Saud Al-Rafdi',
      contact: '',
      addressAr: 'امانة حائل ,حي المطار',
      addressEn: 'Hail Municipality, Airport District',
      link: 'https://goo.gl/maps/X9C32LiqhEWWAnqM8',
    },
    {
      nameAr: 'الإدارة العامة للعمليات والطواريء',
      nameEn: 'General Department of Operations and Emergencies',
      managerAr: 'أ / ناصر عبدالله العتيق',
      managerEn: 'Mr. Nasser Abdullah Al-Atiq',
      contact: '',
      addressAr: 'امانة حائل ,حي المطار',
      addressEn: 'Hail Municipality, Airport District',
      link: 'https://goo.gl/maps/Uny2ma4QFCBPsUBe6',
    },
    {
      nameAr: 'إدارة الامن والسلامة',
      nameEn: 'Safety and Security Department',
      managerAr: 'أ / بشير علي النماصي',
      managerEn: 'Mr. Basheer Ali Al-Namasi',
      contact: '',
      addressAr: 'امانة حائل ,حي المطار',
      addressEn: 'Hail Municipality, Airport District',
      link: 'https://goo.gl/maps/XHvPt9gp5CaaRQ4k9',
    },
    {
      nameAr: 'الوحدة المركزية لاعتماد المخططات',
      nameEn: 'Central Unit for Plan Approval',
      managerAr: 'م / ماجد الصويدرة',
      managerEn: 'Eng. Majed Al-Suwaidrah',
      contact: '',
      addressAr: 'امانة حائل ,حي المطار',
      addressEn: 'Hail Municipality, Airport District',
      link: 'https://goo.gl/maps/vz3FGEDcj5Z9YkETA',
    },
    {
      nameAr: 'إدارة الأراضي',
      nameEn: 'Lands Department',
      managerAr: 'م / ثامر غبين الشمري',
      managerEn: 'Eng. Thamer Ghabeen Al-Shammari',
      contact: '',
      addressAr: 'امانة حائل ,حي المطار',
      addressEn: 'Hail Municipality, Airport District',
      link: 'https://goo.gl/maps/i2QxJJXyxHQRmGZJ7',
    },
    {
      nameAr: 'إدارة صحة البيئة',
      nameEn: 'Environmental Health Department',
      managerAr: 'م / فهد حمود البقعاوي',
      managerEn: 'Eng. Fahad Hamoud Al-Buqawi',
      contact: '',
      addressAr: 'امانة حائل ,حي المطار',
      addressEn: 'Hail Municipality, Airport District',
      link: 'https://goo.gl/maps/ZGDQoX16KbGqnbuL8',
    },
    {
      nameAr: 'الإدارة العامة للنظافة',
      nameEn: 'General Department of Cleaning',
      managerAr: 'د / يوسف النومسي',
      managerEn: 'Dr. Youssef Al-Nomsi',
      contact: '',
      addressAr: 'امانة حائل ,حي المطار',
      addressEn: 'Hail Municipality, Airport District',
      link: 'https://goo.gl/maps/PbD97youDtRhkFfJ8',
    },
    {
      nameAr: 'بلدية وسط المدينة',
      nameEn: 'Central City Municipality',
      managerAr: 'أ / متعب فهد العنزى',
      managerEn: 'Mr. Muteb Fahad Al-Enezi',
      contact: '',
      addressAr: 'حي سماح',
      addressEn: 'Samah District',
      link: 'https://goo.gl/maps/Uomqjq7fJRhMAPSR6',
    },
    {
      nameAr: 'بلدية شمال المدينة',
      nameEn: 'North City Municipality',
      managerAr: 'م / سالم عودة السعدي',
      managerEn: 'Eng. Salem Ouda Al-Saadi',
      contact: '',
      addressAr: 'حي الخزامى',
      addressEn: 'Khozama District',
      link: 'https://goo.gl/maps/eAyc5QLQWjS45JT7A',
    },
    {
      nameAr: 'بلدية جنوب المدينة',
      nameEn: 'South City Municipality',
      managerAr: 'م/ راكان عبدالله السويلم',
      managerEn: 'Eng. Rakan Abdullah Al-Suwailim',
      contact: '',
      addressAr: 'حي النقرة',
      addressEn: 'Noqrah District',
      link: 'https://goo.gl/maps/18NNa1zX9L4fZwRy7',
    },
  ];

  constructor(private translate: TranslateService) {
    this.lang = this.translate.currentLang === 'ar' ? 'ar' : 'en';
    this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang === 'ar' ? 'ar' : 'en';
    });
  }
} 