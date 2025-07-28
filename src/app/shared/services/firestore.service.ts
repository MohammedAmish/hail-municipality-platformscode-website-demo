import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface FeedbackEntry {
  useful: boolean;
  reasons: string[];
  gender: string;
  feedbackText: string;
  submittedAt: any;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

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
}
