import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FirestoreService, RatingEntry } from '../../shared/services/firestore.service';
import { Subscription } from 'rxjs';
import { PlatformService } from '../../shared/services/platform.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnDestroy {
  averageRating = 3.9;
  userRating: number | null = null;
  comment: string = '';
  isRatingMode = false;
  submitted = false;
  stars = [1, 2, 3, 4, 5];
  totalRatings = 0;

  private ratingsSub: Subscription | null = null;

  constructor(
    private firestoreService: FirestoreService,
    private platform: PlatformService
  ) {}

  ngOnInit() {
    if (this.platform.isBrowser) {
      this.submitted = localStorage.getItem('ratingSubmitted') === 'true';

      this.ratingsSub = this.firestoreService.getAllRatings().subscribe(ratings => {
        this.totalRatings = ratings.length;
        if (ratings.length > 0) {
          const sum = ratings.reduce((acc, curr) => acc + curr.rating, 0);
          this.averageRating = sum / ratings.length;
        } else {
          this.averageRating = 0;
        }
      });
    }
  }

  ngOnDestroy() {
    this.ratingsSub?.unsubscribe();
  }

  startRating() {
    if (!this.submitted) {
      this.isRatingMode = true;
    }
  }

  selectRating(event: MouseEvent, index: number) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const isLeftHalf = event.clientX - rect.left < rect.width / 2;
    this.userRating = index + (isLeftHalf ? 0.5 : 1);
  }

  submitRating() {
    if (this.platform.isBrowser && this.userRating) {
      const rating: RatingEntry = {
        rating: this.userRating,
        comment: this.comment,
        submittedAt: new Date()
      };

      this.firestoreService.submitRating(rating).then(() => {
        localStorage.setItem('ratingSubmitted', 'true');
        this.isRatingMode = false;
        this.submitted = true;
        this.comment = '';
      }).catch(err => {
        console.error('Error submitting rating:', err);
        alert('Failed to submit rating. Please try again.');
      });
    }
  }

  getDisplayedRating(): number {
    return this.submitted && this.userRating ? this.userRating : this.averageRating;
  }

  getStarFill(value: number | null, index: number): string {
    if (value == null) return '#E5E7EB';
    if (value >= index + 1) return '#1B8354';
    if (value >= index + 0.5) return 'url(#halfGradient' + index + ')';
    return '#E5E7EB';
  }
}
