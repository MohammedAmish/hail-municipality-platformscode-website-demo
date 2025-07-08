import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbackState: 'initial' | 'form' | 'submitted' = 'initial';

  reasons: string[] = [];
  feedbackText = '';
  gender: 'male' | 'female' | null = null;
  wasUseful: boolean | null = null;

  handleInitialVote(useful: boolean) {
    this.wasUseful = useful;
    this.feedbackState = 'form';
  }

  toggleReason(reason: string) {
    const index = this.reasons.indexOf(reason);
    if (index > -1) {
      this.reasons.splice(index, 1);
    } else {
      this.reasons.push(reason);
    }
  }

  submitFeedback() {
    console.log({
      useful: this.wasUseful,
      reasons: this.reasons,
      gender: this.gender,
      feedbackText: this.feedbackText
    });
    this.feedbackState = 'submitted';
  }

  closeForm() {
    this.feedbackState = 'initial';
    this.feedbackText = '';
    this.gender = null;
    this.reasons = [];
  }

  dir: 'ltr' | 'rtl' = 'ltr';

  ngOnInit() {
  this.dir = document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';
  }
}
