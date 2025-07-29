import { Component, OnDestroy, OnInit, inject, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FirestoreService } from '../../shared/services/firestore.service';
import { Subscription } from 'rxjs';
import { PlatformService } from '../../shared/services/platform.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedbackState: 'initial' | 'form' | 'submitted' = 'initial';

  reasons: string[] = [];
  feedbackText = '';
  gender: 'male' | 'female' | null = null;
  wasUseful: boolean | null = null;
  dir: 'ltr' | 'rtl' = 'ltr';

  totalFeedback = 0;
  totalYes = 0;
  totalNo = 0;

  private feedbackSub: Subscription | null = null;

  readonly reasonEnglishMap: Record<string, string> = {
    'FEEDBACK.relevant': 'Content is relevant',
    'FEEDBACK.wellwritten': 'It was well written',
    'FEEDBACK.layout': 'The layout made it easy to read',
    'FEEDBACK.notrelevant': 'Content is not relevant',
    'FEEDBACK.notaccurate': 'Content is not accurate',
    'FEEDBACK.toolong': 'Content is too long',
    'FEEDBACK.other': 'Something else',
  };

  constructor(
    private firestoreService: FirestoreService,
    public translate: TranslateService,
    private platform: PlatformService,
    private injector: EnvironmentInjector
  ) {}

  ngOnInit() {
    if (this.platform.isBrowser) {
      this.dir = document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';

      const feedbackSubmitted = localStorage.getItem('feedbackSubmitted');
      if (feedbackSubmitted === 'true') {
        this.feedbackState = 'submitted';
      }

      runInInjectionContext(this.injector, () => {
        this.feedbackSub = this.firestoreService.getAllFeedback().subscribe(feedbacks => {
          this.totalFeedback = feedbacks.length;
          this.totalYes = feedbacks.filter(f => f.useful === true).length;
          this.totalNo = feedbacks.filter(f => f.useful === false).length;
        });
      });
    }
  }

  ngOnDestroy() {
    this.feedbackSub?.unsubscribe();
  }

  get yesPercentage(): number {
    if (this.totalFeedback === 0) return 0;
    return Math.round((this.totalYes / this.totalFeedback) * 100);
  }

  get feedbackReasonKeys(): string[] {
    if (this.wasUseful === true) {
      return ['FEEDBACK.relevant', 'FEEDBACK.wellwritten', 'FEEDBACK.layout', 'FEEDBACK.other'];
    } else {
      return ['FEEDBACK.notrelevant', 'FEEDBACK.notaccurate', 'FEEDBACK.toolong', 'FEEDBACK.other'];
    }
  }

  get reasonsForSubmission(): string[] {
    return this.reasons.map(key => this.reasonEnglishMap[key]);
  }

  handleInitialVote(useful: boolean) {
    if (this.feedbackState === 'submitted') {
      return;
    }
    this.wasUseful = useful;
    this.feedbackState = 'form';
    this.reasons = [];
  }

  toggleReason(reasonKey: string) {
    if (this.feedbackState === 'submitted') return;
    const index = this.reasons.indexOf(reasonKey);
    if (index > -1) {
      this.reasons.splice(index, 1);
    } else {
      this.reasons.push(reasonKey);
    }
  }

  submitFeedback() {
    if (this.feedbackState === 'submitted') return;

    const feedbackData = {
      useful: this.wasUseful,
      reasons: this.reasonsForSubmission,
      gender: this.gender,
      feedbackText: this.feedbackText
    };

    if (this.platform.isBrowser) {
      this.firestoreService.submitFeedback(feedbackData)
        .then(() => {
          localStorage.setItem('feedbackSubmitted', 'true');
          this.feedbackState = 'submitted';
        })
        .catch((error) => {
          console.error('Error submitting feedback:', error);
          alert('Something went wrong. Please try again.');
        });
    }
  }

  closeForm() {
    if (this.feedbackState === 'submitted') return;
    this.feedbackState = 'initial';
    this.feedbackText = '';
    this.gender = null;
    this.reasons = [];
  }
}
