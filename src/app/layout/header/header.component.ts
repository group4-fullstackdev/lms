import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { LoginService } from '../../pages/login/login.service';

import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, RouterModule , RouterLinkActive , CommonModule ],
  providers:[LoginService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(public loginService: LoginService) {} 

  ngOnInit(): void {
  }

}
