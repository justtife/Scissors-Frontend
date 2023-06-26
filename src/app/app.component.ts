import { Component, HostListener, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'scissors';
  isAnimated = false;
  isArrowRight: boolean = false;
  private timeOutFlag: boolean = false;
  constructor(private sessionService: SessionService) {}
  @HostListener('window:mousemove')
  @HostListener('window:keydown')
  resetSessionTimer(): void {
    this.sessionService.resetTimer();
    this.timeOutFlag = false;
  }
  ngOnInit(): void {
    setInterval(() => {
      if (this.sessionService.isTimedOut() && !this.timeOutFlag) {
        console.log('timed out');
        this.timeOutFlag = true;
      }
    }, 1000);
  }
  toggleAnimate() {
    this.isAnimated = !this.isAnimated;
    this.isArrowRight = !this.isArrowRight;
  }
}
