import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Use styleUrls instead of styleUrl
})
export class LoginComponent {
  userType: string = '';  // Initialize with a default value or leave it empty
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {
    const userData = {
      userType: this.userType,
      email: this.email,
      password: this.password
    };

    // Send form data to the backend 
    this.http.post('your-backend-login-api-endpoint', userData)
      .subscribe(response => {
        console.log('Login successful:', response);
        // Handle response from the backend 
      });
  }
}
