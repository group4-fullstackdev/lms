import { Routes } from '@angular/router';
import { Component1Component } from '../app/landingpage/component1/component1.component';
import { AccountComponent } from "../app/pages/account/account.component";

export const routes: Routes = [
  { path: '', component: Component1Component},
  { path: 'account', component: AccountComponent},
  
];
