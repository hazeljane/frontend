import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Needed for routerLink in the template
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grades',
  imports: [CommonModule,RouterModule],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.scss'
})
export class GradesComponent {

}
