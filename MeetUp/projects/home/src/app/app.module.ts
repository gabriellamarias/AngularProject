import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEventListComponent } from './all-event-list/all-event-list.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { EventPageComponent } from './event-page/event-page.component';



@NgModule({
  declarations: [
    AppComponent,
    AllEventListComponent,
    EventPreviewComponent,
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
