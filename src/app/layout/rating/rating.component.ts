import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  averageRating = 4.2; // from backend, mock value for now
  userRating: number | null = null;
  comment: string = '';
  isRatingMode = false;
  submitted = false;
  stars = [1, 2, 3, 4, 5];

  // Open feedback form
  startRating() {
    this.isRatingMode = true;
  }

  // Click to rate a star
  selectRating(value: number) {
    this.userRating = value;
  }

  // Submit the rating
  submitRating() {
    if (this.userRating) {
      console.log('Submitted:', this.userRating, this.comment);
      this.isRatingMode = false;
      this.submitted = true;

      // Simulate sending to backend...
      // Reset comment optionally
      this.comment = '';
    }
  }

  getDisplayedRating(): number {
    return this.submitted && this.userRating ? this.userRating : this.averageRating;
  }
}
