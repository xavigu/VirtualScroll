import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
