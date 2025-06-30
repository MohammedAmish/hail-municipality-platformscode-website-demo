import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    TabViewModule,
    TagModule,
    CarouselModule,
    ButtonModule,
  ],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'], // corrected property name
})
export class ServiceComponent {
  steps: string[] = [
    'SERVICE.steps.step1',
    'SERVICE.steps.step2',
    'SERVICE.steps.step3',
    'SERVICE.steps.step4',
    'SERVICE.steps.step5',
    'SERVICE.steps.step6',
    'SERVICE.steps.step7',
  ];

  conditions: string[] = [
    'SERVICE.conditions.condition1',
  ];

  documents: string[] = [
    'SERVICE.documents.doc1',
  ];

  // Added icon property for each info section for icon rendering in template
  infoSections = [
    { label: 'SERVICE.info.audience', value: 'SERVICE.info.audiencevalue', icon: 'Icon-audience' },
    { label: 'SERVICE.info.duration', value: 'SERVICE.info.durationvalue', icon: 'Icon-clock' },
    { label: 'SERVICE.info.servicechannel', value: 'SERVICE.info.servicechannelvalue', icon: 'Icon-channel' },
    { label: 'SERVICE.info.fees', value: 'SERVICE.info.feesvalue', icon: 'Icon-fees' },
    { label: 'SERVICE.info.paymentchannel', value: '' }, // handled separately in HTML
  ];

  infoSections2 = [
    { label: 'CONTACTUS.form.phone', value: '016/5335000' },
    { label: 'CONTACTUS.form.email', value: 'test@gmail.com' },
  ];

  serviceTags: string[] = [
    'SERVICE.tags.tag1',
    'SERVICE.tags.tag2',
    'SERVICE.tags.tag3',
  ];

  services = [
    {
      icon: 'assets/images/Icon-sustainable.png',
      title: 'SERVICE.related.card1.title',
      desc: 'SERVICE.related.card1.desc',
      tags: ['SERVICE.related.card1.tag1'],
      link: '/',
    },
    {
      icon: 'assets/images/Icon-strategy.png',
      title: 'SERVICE.related.card2.title',
      desc: 'SERVICE.related.card2.desc',
      tags: ['SERVICE.related.card2.tag1'],
      link: '/',
    },
    {
      icon: 'assets/images/Icon-contact.png',
      title: 'SERVICE.related.card3.title',
      desc: 'SERVICE.related.card3.desc',
      tags: ['SERVICE.related.card3.tag1'],
      link: '/',
    },
    {
      icon: 'assets/images/Icon-news.png',
      title: 'SERVICE.related.card4.title',
      desc: 'SERVICE.related.card4.desc',
      tags: ['SERVICE.related.card4.tag1'],
      link: '/',
    },
  ];

  responsiveServicesOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  getSeverity(index: number): string {
    const colors = ['border-green-600 text-green-600', 'border-amber-500 text-amber-500', 'border-red-600 text-red-600'];
    return colors[index % colors.length];
  }
}
