import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  imports: [
    RouterModule,
    TranslateModule,
    DropdownModule,
    FileUploadModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
  ],
})
export class ContactUsComponent {
  categories: { label: string; value: string }[] = [];

  constructor(private translate: TranslateService) {
    this.setTranslatedCategories();
    // Re-translate on language switch
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedCategories();
    });
  }

  private setTranslatedCategories() {
    this.categories = [
      {
        value: this.translate.instant('CONTACTUS.form.category.value1'),
        label: this.translate.instant('CONTACTUS.form.category.label1'),
      },
      {
         value: this.translate.instant('CONTACTUS.form.category.value2'),
        label: this.translate.instant('CONTACTUS.form.category.label2'),
      },
      {
         value: this.translate.instant('CONTACTUS.form.category.value3'),
        label: this.translate.instant('CONTACTUS.form.category.label3'),
      },
    ];
  }
}
