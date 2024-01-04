import { Component } from '@angular/core';
import { SubmissionsStaffService } from './submissionsstaff.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-submissionsstaff',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './submissionsstaff.component.html',
  styleUrl: './submissionsstaff.component.scss'
})
export class SubmissionsstaffComponent {
  modID = 'PUSL3031'; 
  subtitle = 'coursework'; 
  studentSubmissions: any[] = [];

  constructor(private submissionsService: SubmissionsStaffService) {}

  ngOnInit(): void {
    this.fetchStudentSubmissions();
  }

  fetchStudentSubmissions(): void {
    this.submissionsService.getStudentSubmissions(this.modID, this.subtitle).subscribe(
      (response) => {
        this.studentSubmissions = response.modSubData;
        console.log('Student submissions retrieved successfully:', this.studentSubmissions);
      },
      (error) => {
        console.error('Error retrieving student submissions:', error);
      }
    );
  }

}
