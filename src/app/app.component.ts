import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';
import {routes } from "./app.routes";
import { Component1Component } from "./landingpage/component1/component1.component";
import { HeaderComponent } from "./layout/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, Component1Component, RouterModule, RouterLinkActive, RouterLink, HeaderComponent]
})
export class AppComponent {
  title = 'N-Learn';
}
