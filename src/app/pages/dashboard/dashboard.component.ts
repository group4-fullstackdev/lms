import { Component } from '@angular/core';
import { MaindashboardpropsComponent } from '../../subcomponents/maindashboardprops/maindashboardprops.component';
import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ MaindashboardpropsComponent , RouterLink , RouterLinkActive , RouterModule],
  providers:[LoginService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    public loginService: LoginService
  ) {}

}
