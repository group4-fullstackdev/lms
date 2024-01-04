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
import { LoginService } from './pages/login/login.service';
import { GradesService } from './pages/grades/grades.service';
import { GradesComponent } from './pages/grades/grades.component';
import { ChatroomComponent } from './subcomponents/chatroom/chatroom.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,StaffmodulecontentComponent,RouterOutlet, FormsModule, ChatroomComponent ,Component1Component, RouterModule, RouterLinkActive, RouterLink, HeaderComponent, FooterComponent , HttpClientModule],
    providers:[LoginService , GradesService , GradesComponent]
  })
export class AppComponent {
  title = 'N-Learn';
}
