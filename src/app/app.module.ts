import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
