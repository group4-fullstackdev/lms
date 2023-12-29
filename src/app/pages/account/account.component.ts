import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  userBio: string = ''; // Placeholder for user's bio
  userName: string = ''; // Placeholder for user's name
  userEmail: string = ''; // Placeholder for user's email

  uploadPhoto(): void {
    //  photo upload
  }

  saveBio(): void {
    //  user's bio
  }


  uName: string = '';
  uEmail: string = '';
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveProfile() {
    const formData = new FormData();
    formData.append('uName', this.uName);
    formData.append('uEmail', this.uEmail);

    if (this.selectedFile) {
      formData.append('userPhoto', this.selectedFile, this.selectedFile.name);
    }

    // Replace 'your-backend-api-endpoint' with the actual URL of your backend API endpoint
    this.http.post('your-backend-api-endpoint', formData)
      .subscribe(response => {
        console.log('Profile saved successfully:', response);
        // Handle response from the backend if needed
      });
  }
}