import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Use styleUrls instead of styleUrl
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  login() {
    // Implement your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Add your authentication service calls or logic
  }
}
