import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ActiveDirective } from './active.directive';
import { Active1Directive } from './active1.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActiveDirective,
    Active1Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
