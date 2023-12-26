import { Component } from '@angular/core';
import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';


@Component({
  selector: 'app-maindashboardprops',
  standalone: true,
  imports: [ RouterLink , RouterLinkActive , RouterModule],
  templateUrl: './maindashboardprops.component.html',
  styleUrl: './maindashboardprops.component.scss'
})
export class MaindashboardpropsComponent {

}
