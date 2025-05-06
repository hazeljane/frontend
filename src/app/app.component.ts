import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { MyprofileComponent } from './layout/myprofile/myprofile.component';
import { LoginComponent } from './layout/login/login.component';
import { GradesComponent } from './layout/grades/grades.component';
import { ScheduleComponent } from './layout/schedule/schedule.component';
import { AttendanceComponent } from './layout/attendance/attendance.component';
import { PersonalinfoComponent } from './layout/personalinfo/personalinfo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, CommonModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// app.component.ts
export class AppComponent{
  title = 'angular';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}