import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AdBlockService {
  private adBlockedSubject = new BehaviorSubject<boolean>(this.isAdBlocked());
  adBlocked$ = this.adBlockedSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('adBlocked');
    if (saved !== null) {
      this.adBlockedSubject.next(JSON.parse(saved));
    }
  }

  isAdBlocked(): boolean {
    const saved = localStorage.getItem('adBlocked');
    return saved ? JSON.parse(saved) : false;
  }

  setAdBlocked(blocked: boolean): void {
    localStorage.setItem('adBlocked', JSON.stringify(blocked));
    this.adBlockedSubject.next(blocked);
  }

  toggleAdBlocked(): void {
    const current = this.isAdBlocked();
    this.setAdBlocked(!current);
  }
}
