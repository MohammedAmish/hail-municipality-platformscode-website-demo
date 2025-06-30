import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AccordionModule,
    ButtonModule,
    RouterModule,
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FAQsComponent {
  faqs = [
    {
      question: 'FAQs.items.q1.question',
      answer: 'FAQs.items.q1.answer',
    },
    {
      question: 'FAQs.items.q2.question',
      answer: 'FAQs.items.q2.answer',
    },
    {
      question: 'FAQs.items.q3.question',
      answer: 'FAQs.items.q3.answer',
    },
    {
      question: 'FAQs.items.q4.question',
      answer: 'FAQs.items.q4.answer',
    },
    {
      question: 'FAQs.items.q5.question',
      answer: 'FAQs.items.q5.answer',
    },
  ];
}
