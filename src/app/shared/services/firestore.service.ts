import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  query,
  orderBy
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface FeedbackEntry {
  useful: boolean;
  reasons: string[];
  gender: string;
  feedbackText: string;
  submittedAt: any;
}

export interface RatingEntry {
  rating: number;
  comment: string;
  submittedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore = inject(Firestore);

  submitFeedback(data: any) {
    const feedbackRef = collection(this.firestore, 'WebsiteFeedback');
    return addDoc(feedbackRef, {
      ...data,
      submittedAt: new Date()
    });
  }

  getAllFeedback(): Observable<FeedbackEntry[]> {
    const feedbackRef = collection(this.firestore, 'WebsiteFeedback');
    return collectionData(feedbackRef, { idField: 'id' }) as Observable<FeedbackEntry[]>;
  }

  submitRating(rating: RatingEntry) {
    const ratingRef = collection(this.firestore, 'Ratings');
    return addDoc(ratingRef, rating);
  }

  getAllRatings(): Observable<RatingEntry[]> {
    const ratingRef = collection(this.firestore, 'Ratings');
    const ratingQuery = query(ratingRef, orderBy('submittedAt', 'desc'));
    return collectionData(ratingQuery, { idField: 'id' }) as Observable<RatingEntry[]>;
  }
}
