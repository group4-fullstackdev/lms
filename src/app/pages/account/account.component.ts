import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from './account.service';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.fetchUserProfile();
  }

  fetchUserProfile() {
    this.accountService.getProfile().subscribe(
      (response) => {
        this.userType = response.user.UserType;
        this.userName = response.user.name;
        this.userEmail = response.user.email;
      },
      (error) => {
        console.error('Error retrieving user profile', error);
      }
    );
  }

  


  userType: string = ''; // Placeholder for user's bio
  userName: string = ''; // Placeholder for user's name
  userEmail: string = ''; // Placeholder for user's email

  uploadPhoto(): void {
    //  photo upload
  }

  saveBio(): void {
    //  user's bio
  }

  deleteprof(){
    this.http.get('http://localhost:3000/api/nlearn/deleteprof')
      .subscribe((response: any) => {
        
      });
  }


  uName: string = '';
  uEmail: string = '';
  selectedFile: File | null = null;

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

    this.http.post('http://localhost:3000/api/nlearn/setprofile', formData)
      .subscribe(
        (response) => {
          console.log('Profile saved successfully:', response);
        },
        (error) => {
          console.error('Error saving user profile', error);
        }
      );
  }

  
}