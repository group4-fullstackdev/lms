import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticestaff',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './noticestaff.component.html',
  styleUrl: './noticestaff.component.scss'
})
export class NoticestaffComponent {
  noticeData = {
    title: '',
    content: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = new FormData();
    formData.append('title', this.noticeData.title);
    formData.append('content', this.noticeData.content);
    // Send form data to the backend 
    this.http.post('your-backend-api-endpoint', this.noticeData)
      .subscribe((response: any) => {
        console.log('Data sent successfully:', response);
        // Handle response from the backend
      });
  }
}
