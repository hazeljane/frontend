import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  imports: [RouterModule,CommonModule ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  calendar: (number | null)[][] = [];

  weekDays: string[] = ['Mo', 'Tu', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const startDay = (firstDay.getDay() + 6) % 7;

    const weeks: (number | null)[][] = [];
    let week: (number | null)[] = new Array(startDay).fill(null);
    for (let date = 1; date <= lastDate; date++) {
      week.push(date);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length) {
      while (week.length < 7) week.push(null);
      weeks.push(week);
    }

    this.calendar = weeks;
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }
  isToday(date: number | null): boolean {
  if (!date) return false;
  const today = new Date();
  return (
    date === today.getDate() &&
    this.currentMonth === today.getMonth() &&
    this.currentYear === today.getFullYear()
  );
}
}
