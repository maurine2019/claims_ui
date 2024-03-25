import { DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnDestroy {
  currentTime: string = '';
  currentDate: Date = new Date();

  private timer: any;

  constructor() {
    // Initialize current time
    this.updateTime();

    // Update time every second
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    // Clear timer when component is destroyed
    clearInterval(this.timer);
  }

  private updateTime(): void {
    const now = new Date();
    this.currentTime = this.formatTime(now);
  }

  private formatTime(date: Date): string {
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    const seconds = this.padZero(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
