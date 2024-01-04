import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GradesService } from './grades.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [FormsModule , CommonModule, NgFor],
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  grades: any[] = [];

  constructor(private http: HttpClient, private gradesService: GradesService) {}

  ngOnInit(): void {
    this.fetchGrades();
  }

  fetchGrades(): void {
    this.gradesService.getGrades().subscribe(
      (response) => {
        this.grades = response;
        console.log('Grades retrieved successfully:');
      },
      (error) => {
        console.error('Error retrieving grades:', error);
      }
    );
  }

  downloadResults() {
    this.http.get('http://localhost:3000/api/nlearn/getresultsdoc', { responseType: 'arraybuffer' })
      .subscribe((response: any) => {
        this.downloadFile(response);
      });
  }

  private downloadFile(data: any) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link and trigger a download
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = 'results.zip';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
