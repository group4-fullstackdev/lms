import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { SubmissionsstaffComponent } from '../../subcomponents/submissionsstaff/submissionsstaff.component';
import { RouterModule } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-submissions',
  standalone: true,
  imports: [FormsModule , RouterModule, SubmissionsstaffComponent, NgIf, CommonModule],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {

  fileInput: any;
  fileName: string = '';

  constructor(private http: HttpClient , public loginService:LoginService) {}

  onFileSelected(event: any) {
    this.fileInput = event.target;
    this.fileName = this.fileInput.files[0].name;
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.fileInput.files[0]);
    formData.append('fileName', this.fileName);

    this.http.post('http://localhost:3000/api/nlearn/addsubmission', formData)
      .subscribe(response => {
        console.log('File uploaded successfully:', response);
        // Handle response from the backend if needed
      });
    }

    resetForm() {
      // Reset file input and fileName
      this.fileInput.value = null;
      this.fileName = '';
    }

}
