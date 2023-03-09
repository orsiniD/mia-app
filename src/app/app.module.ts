import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimaliComponent } from './animali/animali.component';
import { PersoneComponent } from './persone/persone.component';
import { PippoComponent } from './pippo/pippo.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimaliComponent,
    PersoneComponent,
    PippoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
