import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  averageRating = 3.9;
  userRating: number | null = null;
  comment: string = '';
  isRatingMode = false;
  submitted = false;
  stars = [1, 2, 3, 4, 5];
  
  startRating() {
    this.isRatingMode = true;
  }

  selectRating(event: MouseEvent, index: number) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const isLeftHalf = event.clientX - rect.left < rect.width / 2;
    this.userRating = index + (isLeftHalf ? 0.5 : 1);
  }

  submitRating() {
    if (this.userRating) {
      console.log('Submitted:', this.userRating, this.comment);
      this.isRatingMode = false;
      this.submitted = true;
      this.comment = '';
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
