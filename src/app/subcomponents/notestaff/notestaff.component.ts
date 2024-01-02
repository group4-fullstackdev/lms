import { Component } from '@angular/core';
import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';

@Component({
  selector: 'app-notestaff',
  standalone: true,
  imports: [ RouterLink , RouterModule],
  templateUrl: './notestaff.component.html',
  styleUrl: './notestaff.component.scss'
})
export class NotestaffComponent {

}
