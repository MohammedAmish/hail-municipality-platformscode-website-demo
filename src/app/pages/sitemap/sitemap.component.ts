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
      title: 'SITEMAP.page.blank',
      link: '/',
      children: [
        { title: 'SITEMAP.page.subblank', link: '/' },
      ]
    },
  ];
}
