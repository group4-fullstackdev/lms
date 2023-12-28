import { Component } from '@angular/core';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
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

  saveProfile(): void {
    //  edited profile (name, email)
  }

  onFileSelected(event: Event): void {
    //  file selection (photo upload)
  }
}