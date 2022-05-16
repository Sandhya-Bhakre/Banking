import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotUserIdComponent } from './forgotUserId/forgot-user-id.component';
import { HomePageComponent } from './homePage/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotUserIdComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
