import { Routes } from '@angular/router';
import { MyprofileComponent } from './layout/myprofile/myprofile.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { LoginComponent } from './layout/login/login.component';
import { GradesComponent } from './layout/grades/grades.component';
import { ScheduleComponent } from './layout/schedule/schedule.component';
import { AttendanceComponent } from './layout/attendance/attendance.component';
import { PersonalinfoComponent } from './layout/personalinfo/personalinfo.component';
import { HeaderComponent } from './layout/header/header.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'personalinfo', component: PersonalinfoComponent },
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
