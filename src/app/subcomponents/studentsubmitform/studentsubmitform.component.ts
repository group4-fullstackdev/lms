import { Component } from '@angular/core';
import { StudentsubmitformService } from './studentsubmitform.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentsubmitform',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './studentsubmitform.component.html',
  styleUrl: './studentsubmitform.component.scss'
})
export class StudentsubmitformComponent {
  studentSubmissions: any[] = [];
  constructor(private studentsubmitformservice: StudentsubmitformService) {}

  ngOnInit(): void {
    this.fetchStudentSubmissions();
  }

  fetchStudentSubmissions(): void {
    this.studentsubmitformservice.getStudentSubmissions().subscribe(
      (response) => {
        this.studentSubmissions = response.modSubData;
        console.log('Student submissions retrieved successfully:');
      },
      (error) => {
        console.error('Error retrieving student submissions:', error);
      }
    );
  }

}
