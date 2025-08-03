// contact-us.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FirestoreService } from '../../shared/services/firestore.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule, DropdownModule, FileUploadModule, ButtonModule, InputTextModule, TextareaModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  categories: any[] = [];
  formData: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    category: null,
    message: '',
  };

  constructor(
    public translate: TranslateService,
    private firestoreService: FirestoreService
  ) {
    this.setTranslatedCategories();
    this.translate.onLangChange.subscribe(() => this.setTranslatedCategories());
  }

  setTranslatedCategories() {
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

  async submitForm() {
    try {
      await this.firestoreService.submitContactForm({
        ...this.formData,
        category: this.formData.category?.value ?? null,
        submittedAt: new Date(),
      });
      alert(this.translate.instant('CONTACTUS.form.success'));
      this.formData = {}; // Reset the form
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
}
