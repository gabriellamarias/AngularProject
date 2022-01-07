import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEventListComponent } from './all-event-list/all-event-list.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { EventPageComponent } from './event-page/event-page.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule } from '@angular/forms';
import { UpdateEventComponent } from './update-event/update-event.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AllLocationListComponent } from './all-location-list/all-location-list.component';
import { LocationPreviewComponent } from './location-preview/location-preview.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AllEventListComponent,
    EventPreviewComponent,
    EventPageComponent,
    CreateEventComponent,
    UpdateEventComponent,
    HomePageComponent,
    UserPageComponent,
    AllLocationListComponent,
    LocationPreviewComponent,
    FavoritesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
