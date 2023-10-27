import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Maincomponent} from './main/main.component';
import { main2Component } from './main2/main2.component';

@NgModule({
  declarations: [
    AppComponent,
    Maincomponent,
    main2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
