import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'partners-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule, TranslateModule],
  templateUrl: './partners-slider.component.html',
  styleUrl: './partners-slider.component.scss',
})
export class PartnersSliderComponent {
  partners: { name: string; logo: string; link: string}[] = [
    { name: 'Partner A', logo: './assets/images/PartnerA.jpg', link: 'https://business.sa/' },
    { name: 'Partner B', logo: './assets/images/PartnerB.svg', link: 'https://balady.gov.sa/' },
    { name: 'Partner C', logo: './assets/images/PartnerC.png', link: 'https://gis.amanathail.gov.sa/Municipality/LoginSMS' },
    { name: 'Partner D', logo: './assets/images/PartnerD.png', link: 'https://portal.etimad.sa/' },
    { name: 'Partner E', logo: './assets/images/PartnerE.png', link: 'https://my.gov.sa/ar' },
    { name: 'Partner F', logo: './assets/images/PartnerF.png', link: 'https://gis.amanathail.gov.sa/portal/sharing/oauth2/authorize?client_id=arcgisonline&response_type=code&state=%7B%22portalUrl%22%3A%22https%3A%2F%2Fgis.amanathail.gov.sa%2Fportal%22%2C%22uid%22%3A%22Qfy3K1bDGbl-ki8JvL-HViZJhNUHzER_shJsKrpFPjY%22%2C%22useLandingPage%22%3Atrue%2C%22clientId%22%3A%22arcgisonline%22%7D&expiration=20160&locale=ar&redirect_uri=https%3A%2F%2Fgis.amanathail.gov.sa%2Fportal%2Fhome%2Faccountswitcher-callback.html&force_login=true&code_challenge=GIlqx_q-kT9UhTWVO2EcMxL7oFxgrvNzxqZNKcgK5Mc&code_challenge_method=S256&display=default&hideCancel=true&showSignupOption=true&canHandleCrossOrgSignIn=true&signuptype=esri' },
  ];
  responsivePartnersOptions: CarouselResponsiveOptions[] | undefined;

  constructor() {
    this.responsivePartnersOptions = [
      { breakpoint: '1400px', numVisible: 5, numScroll: 1 },
      { breakpoint: '1199px', numVisible: 4, numScroll: 1 },
      { breakpoint: '767px', numVisible: 3, numScroll: 1 },
      { breakpoint: '575px', numVisible: 2, numScroll: 1 },
    ];
  }
}