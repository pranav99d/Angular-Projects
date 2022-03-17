import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ActiveDirective } from './active.directive';
import {SqrtPipe} from './app.sqrt';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    SqrtPipe,
    ActiveDirective,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Parent1Component,
    Child2Component,
    Parent2Component,
    Parent3Component,
    SiblingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
