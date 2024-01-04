import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submissions',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {

  fileInput: any;
  fileName: string = '';

  constructor(private http: HttpClient) {}

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
