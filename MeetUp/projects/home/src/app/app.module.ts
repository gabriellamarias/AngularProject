import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEventListComponent } from './all-event-list/all-event-list.component';
import { EventPreviewListComponent } from './event-preview-list/event-preview-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AllEventListComponent,
    EventPreviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
