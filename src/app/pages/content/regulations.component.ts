import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface RegulationItem {
  titleKey: string;
  fileUrl: string;
}

@Component({
  selector: 'app-regulations',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.scss']
})
export class RegulationsComponent {
  systems: RegulationItem[] = [
    { titleKey: 'REGULATIONS.SYSTEMS.ROAD_BUILDINGS', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/نظام الطرق والمباني.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.MUNICIPAL_COUNCILS', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/نظام المجالس البلدية.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.MUNICIPALITIES_VILLAGES', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/نظام البلديات والقرى.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.MUNICIPAL_PROPERTY', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/نظام التصرف في العقارات البلدية.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.CONTRACTOR_CLASSIFICATION', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/نظام تصنيف المقاولين الجديد النسخة المعتمدة.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.EXPROPRIATION', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/نظام نزع ملكية العقارات للمنفعة العامة ووضع اليد المؤقت على العقار النسخة النهائية.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.LICENSING_PROCEDURES', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/نظام إجراءات التراخيص البلدية.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.UNIT_OWNERSHIP', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/قانون ملكية وتثمين وإدارة الوحدات العقارية.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.MUNICIPAL_COUNCILS_LAW', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/قانون المجالس البلدية.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.MUNICIPALITIES_RURAL', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/قانون البلديات والمناطق الريفية.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.WHITE_LAND_TAX', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/قانون ضريبة الأراضي البيضاء.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.ROAD_BUILDINGS_LAW', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/قانون الطرق والمباني.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.SAUDI_BUILDING_CODE', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/نظام تنفيذ كود البناء السعودي.pdf' },
    { titleKey: 'REGULATIONS.SYSTEMS.LICENSING_LAW', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/قانون إجراءات التراخيص البلدية.pdf' }
  ];

  regulations: RegulationItem[] = [
    { titleKey: 'REGULATIONS.REGULATIONS.FINANCIAL_MUNICIPAL_COUNCILS', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/اللائحة المالية للمجالس البلدية.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.PENALTIES', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/لائحة الجزاءات عن المخالفات البلدية.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.EXECUTIVE_LOCAL_COUNCILS', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/اللائحة التنفيذية لنظام المجالس المحليين.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.STREET_VENDORS', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/اللائحة التنظيمية للباعة المتجولين.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.SERVICE_FEES', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/لائحة رسوم الخدمات البلدية.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.PENALTIES_TABLE', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/جدول الجزاءات التابع للائحة الجزاءات عن المخالفات المهنية والحرفية.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.OCCUPATION_LICENSE', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/لائحة الترخيص البلدي لمزاولة المهن والحرف.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.BIODIVERSITY_PRODUCTS', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/لائحة تقديم منتجات التنوع البيولوجي.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.EXECUTIVE_WHITE_LAND', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/اللائحة التنفيذية لنظام رسم الأراضي البيضاء.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.INSPECTION_REQUIREMENTS', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/اللائحة المتطلبات العامة لتعيين جهات التفتيش والمفتشين لأعمال كود البناء السعودي.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.MOBILE_UNITS', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/اللائحة التنظيمية لوحدات البيانات المتنقلة.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.PUBLIC_TOILETS_GUIDE', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/دليل دورات المياه العامة المتنقلة.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.EXECUTIVE_EXPROPRIATION', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/اللائحة التنفيذية لقانون الاستملاك والاستبقاء المؤقت على العقارات.pdf' },
    { titleKey: 'REGULATIONS.REGULATIONS.MUNICIPAL_PROPERTY_REG', fileUrl: 'https://amanathail.gov.sa/new_portal//assets/regulations/اللائحة التصرف في العقارات البلدية.pdf' }
  ];

  constructor(public translate: TranslateModule) {}
} 