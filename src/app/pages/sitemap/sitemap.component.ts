import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { title } from 'process';
import { link } from 'fs';

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.scss'
})
export class SitemapComponent {
  sitemap = [
    {
      title: 'SITEMAP.page.home',
      link: '/',
      children: [
        { title: 'SITEMAP.page.subblank', link: '/' },
        { title: 'SITEMAP.page.subblank', link: '/' }
      ]
    },
    {
      title: 'SITEMAP.page.aboutus',
      link: '/about-us',
      children: [
        { title: 'SITEMAP.page.subblank', link: '/' },
        { title: 'SITEMAP.page.subblank', link: '/' }
      ]
    },
    {
      title: 'SITEMAP.page.contactus',
      link: '/contact-us',
      children: [
        { title: 'SITEMAP.page.subblank', link: '/' },
        { title: 'SITEMAP.page.subblank', link: '/' }
      ]
    },
    {
      title: 'SITEMAP.page.faq',
      link: '/faqs',
      children: [
        { title: 'SITEMAP.page.subblank', link: '/' },
        { title: 'SITEMAP.page.subblank', link: '/' }
      ]
    },
    {
      title: 'SITEMAP.page.help',
      link: '/help-support',
      children: [
        { title: 'SITEMAP.page.subblank', link: '/' },
        { title: 'SITEMAP.page.subblank', link: '/' }
      ]
    },
    {
      title: 'SITEMAP.page.content',
      link: '/content',
      children: [
        { title: 'SITEMAP.page.subblank', link: '/' },
        { title: 'SITEMAP.page.subblank', link: '/' }
      ]
    },
    {
      title: 'SITEMAP.page.eparticipation',
      link: '/e-participation',
      children: [
        { title: 'SITEMAP.page.epart-sub1', link: '/participation-policy' },
        { title: 'SITEMAP.page.epart-sub2', link: '/consultations' },
        { title: 'SITEMAP.page.epart-sub3', link: '/co-creation' },
        { title: 'SITEMAP.page.epart-sub4', link: '/open-data' },
        { title: 'SITEMAP.page.epart-sub5', link: '/complaints-suggestions' },
        { title: 'SITEMAP.page.epart-sub6', link: '/beneficiary' },
        { title: 'SITEMAP.page.epart-sub7', link: '/statistics' },
        { title: 'SITEMAP.page.epart-sub8', link: '/social-media' },
      ]
    },
    {
      title: 'SITEMAP.page.blank',
      link: '/page-not-found',
      children: [
        { title: 'SITEMAP.page.subblank', link: '/page-not-found' },
      ]
    },
  ];
}
