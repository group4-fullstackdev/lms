import { Component } from '@angular/core';

import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, RouterModule , RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
