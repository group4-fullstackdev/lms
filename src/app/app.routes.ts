import { Routes } from '@angular/router';
import { Component1Component } from '../app/landingpage/component1/component1.component';
import { AccountComponent } from "../app/pages/account/account.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubmissionsComponent } from './pages/submissions/submissions.component';
import { ModulecontentComponent } from './pages/modulecontent/modulecontent.component';
import { LoginComponent } from './pages/login/login.component';
import { NoticeComponent } from './subcomponents/notice/notice.component';
import { ChatroomComponent } from './subcomponents/chatroom/chatroom.component';
import { GradesComponent } from './pages/grades/grades.component';
import { NoticestaffComponent } from './subcomponents/noticestaff/noticestaff.component';

export const routes: Routes = [
  { path: '', component: Component1Component},
  { path: 'account', component: AccountComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'submission', component: SubmissionsComponent},
  { path: 'modulecontent', component: ModulecontentComponent},
  { path: 'login', component: LoginComponent},
  { path: 'notice', component: NoticeComponent},
  { path: 'chatroom', component: ChatroomComponent},
  { path: 'grades', component: GradesComponent},
  { path: 'noticestaff', component: NoticestaffComponent},
  
];
