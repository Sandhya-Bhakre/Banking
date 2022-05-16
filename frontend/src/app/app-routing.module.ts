import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ForgotUserIdComponent } from './forgotUserId/forgot-user-id.component';
import { HomePageComponent } from './homePage/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'forgot-user-id', component: ForgotUserIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
