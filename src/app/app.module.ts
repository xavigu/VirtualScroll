import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//New Modules from cdk to import and use
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';
import { DragComponent } from './drag/drag.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
