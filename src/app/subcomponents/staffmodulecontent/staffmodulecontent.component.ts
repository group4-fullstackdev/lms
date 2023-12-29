import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-staffmodulecontent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './staffmodulecontent.component.html',
  styleUrl: './staffmodulecontent.component.scss'
})
export class StaffmodulecontentComponent {
  formData = {
    fileTitle: '',
    materialType: 'lecnote',  // Default value
    file: null as File | null 
  };

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.formData.file = file;
  }

  submitForm() {
    const formData = new FormData();
    formData.append('fileTitle', this.formData.fileTitle);
    formData.append('materialType', this.formData.materialType);
    if (this.formData.file) {
      formData.append('file', this.formData.file, this.formData.file.name);
    }

    this.http.post('your-backend-api-endpoint', formData)
      .subscribe(response => {
        console.log('Form data submitted successfully:', response);
        // Handle response from the backend if needed
      });
  }
}
