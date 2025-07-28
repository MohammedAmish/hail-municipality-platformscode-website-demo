import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FirestoreService, FeedbackEntry } from '../../shared/services/firestore.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnDestroy {
  feedbackState: 'initial' | 'form' | 'submitted' = 'initial';

  reasons: string[] = [];
  feedbackText = '';
  gender: 'male' | 'female' | null = null;
  wasUseful: boolean | null = null;
  dir: 'ltr' | 'rtl' = 'ltr';

  // Feedback stats
  totalFeedback = 0;
  totalYes = 0;
  totalNo = 0;

  private feedbackSub: Subscription | null = null;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.dir = document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';

    this.feedbackSub = this.firestoreService.getAllFeedback().subscribe(feedbacks => {
      this.totalFeedback = feedbacks.length;
      this.totalYes = feedbacks.filter(f => f.useful === true).length;
      this.totalNo = feedbacks.filter(f => f.useful === false).length;
    });
  }

  ngOnDestroy() {
    this.feedbackSub?.unsubscribe();
  }

  get yesPercentage(): number {
  if (this.totalFeedback === 0) return 0;
  return Math.round((this.totalYes / this.totalFeedback) * 100);
  }


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
    const feedbackData = {
      useful: this.wasUseful,
      reasons: this.reasons,
      gender: this.gender,
      feedbackText: this.feedbackText
    };

    this.firestoreService.submitFeedback(feedbackData)
      .then(() => {
        this.feedbackState = 'submitted';
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
        alert('Something went wrong. Please try again.');
      });
  }

  closeForm() {
    this.feedbackState = 'initial';
    this.feedbackText = '';
    this.gender = null;
    this.reasons = [];
  }
}
