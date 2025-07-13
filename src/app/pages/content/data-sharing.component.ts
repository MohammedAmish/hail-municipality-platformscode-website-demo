import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-data-sharing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './data-sharing.component.html',
  styleUrl: './data-sharing.component.scss',
})
export class DataSharingComponent {
  form: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      nationalId: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      dataType: ['', Validators.required],
      dataDescription: ['', Validators.required],
      dataPurpose: ['', Validators.required],
      shareResults: ['', Validators.required],
      attachments: [null],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ attachments: file });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.success = true;
      // هنا يمكن إضافة منطق الإرسال للباك اند لاحقًا
    }
  }
} 