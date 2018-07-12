import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Comp1Component} from './comp1/comp1.component';
import { MyDirective1Directive } from './directive1/directive1.directive';
import { MyColorDirective } from './directive2/directive2.colorDirective';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    MyDirective1Directive,
    MyColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
