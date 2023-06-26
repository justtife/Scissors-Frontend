import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private lastActiveTime: number = Date.now();
  private timeDuration: number =   10 * 1000;
  constructor() {}
  public resetTimer(): void {
    this.lastActiveTime = Date.now();
  }
  public isTimedOut(): boolean {
    return Date.now() - this.lastActiveTime > this.timeDuration;
  }
}
