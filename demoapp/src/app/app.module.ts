import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ActiveDirective } from './active.directive';
import {SqrtPipe} from './app.sqrt';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    SqrtPipe,
    ActiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
