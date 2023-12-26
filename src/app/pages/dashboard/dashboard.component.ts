import { Component } from '@angular/core';
import { MaindashboardpropsComponent } from '../../subcomponents/maindashboardprops/maindashboardprops.component';
import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ MaindashboardpropsComponent , RouterLink , RouterLinkActive , RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
