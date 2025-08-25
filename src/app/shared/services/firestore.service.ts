import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  increment,
  collectionData,
  query,
  orderBy,
  getDocs
} from '@angular/fire/firestore';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';

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
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private firestore: Firestore
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  submitFeedback(data: any) {
    if (!this.isBrowser) return Promise.resolve();
    const feedbackRef = collection(this.firestore, 'WebsiteFeedback');
    return addDoc(feedbackRef, {
      ...data,
      submittedAt: new Date()
    });
  }

  async getUsersCount(): Promise<number> {
  const usersRef = collection(this.firestore, 'users');
  const snapshot = await getDocs(usersRef);
  return snapshot.size;
}

  async incrementHomePageViews(): Promise<void> {
  const viewsRef = doc(this.firestore, 'views', 'views');
  const snapshot = await getDoc(viewsRef);

  if (!snapshot.exists()) {
    await setDoc(viewsRef, { count: 1 });
  } else {
    await setDoc(viewsRef, { count: increment(1) }, { merge: true });
  }
}

async getHomePageViewsCount(): Promise<number> {
  const viewsRef = doc(this.firestore, 'views', 'views');
  const snapshot = await getDoc(viewsRef);
  return snapshot.exists() ? snapshot.data()['count'] : 0;
}

  getAllFeedback(): Observable<FeedbackEntry[]> {
    if (!this.isBrowser) return of([]);
    const feedbackRef = collection(this.firestore, 'WebsiteFeedback');
    return collectionData(feedbackRef, { idField: 'id' }) as Observable<FeedbackEntry[]>;
  }

  submitRating(rating: RatingEntry) {
    if (!this.isBrowser) return Promise.resolve();
    const ratingRef = collection(this.firestore, 'Ratings');
    return addDoc(ratingRef, rating);
  }

  getAllRatings(): Observable<RatingEntry[]> {
    if (!this.isBrowser) return of([]);
    const ratingRef = collection(this.firestore, 'Ratings');
    const ratingQuery = query(ratingRef, orderBy('submittedAt', 'desc'));
    return collectionData(ratingQuery, { idField: 'id' }) as Observable<RatingEntry[]>;
  }

  submitContactForm(data: any) {
  if (!this.isBrowser) return Promise.resolve();
  const ref = collection(this.firestore, 'ContactUsForms');
  return addDoc(ref, data);
  }
}
