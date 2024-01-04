import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  userType: string = '';  // Initialize with a default value or leave it empty
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private loginService: LoginService) {}

  login() {
    const userData = {
      userType: this.userType,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/api/nlearn/login', userData)
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response);

          // Set user session variables
          this.loginService.accID = response.accID;
          this.loginService.batchID = response.batchID;
          this.loginService.log = 'logging';
        },
        (error: any) => {
          // Handle login error
          console.error('Login error:', error);
          const errorMessage = error.error.message;
        }
      );
  }
}
