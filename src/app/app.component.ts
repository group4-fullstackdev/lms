import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';
import {routes } from "./app.routes";
import { Component1Component } from "./landingpage/component1/component1.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StaffmodulecontentComponent } from './subcomponents/staffmodulecontent/staffmodulecontent.component';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,StaffmodulecontentComponent,RouterOutlet, FormsModule, Component1Component, RouterModule, RouterLinkActive, RouterLink, HeaderComponent, FooterComponent , HttpClientModule]
})
export class AppComponent {
  title = 'N-Learn';
}
