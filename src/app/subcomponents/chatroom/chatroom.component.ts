import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chatroom',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.scss'
})
export class ChatroomComponent {
  postData = {
    text: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    // Send form data to the backend 
    this.http.post('your-backend-api-endpoint', this.postData)
      .subscribe(response => {
        console.log('Data sent successfully:', response);
        // Handle response from the backend 
      });
  }
}
