import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editnote',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editnote.component.html',
  styleUrl: './editnote.component.scss'
})
export class EditnoteComponent {
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
    this.http.put('http://localhost:3000/api/nlearn/editnotices', this.noticeData)
      .subscribe((response: any) => {
        console.log('Data sent successfully:', response);
      });
  }

}
