import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventListComponent } from './all-event-list/all-event-list.component';
import { EventPageComponent } from './event-page/event-page.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AllLocationListComponent } from './all-location-list/all-location-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "events", component: AllEventListComponent},
  {path: "locations", component: AllLocationListComponent},
  {path: "event/:eventID", component: EventPageComponent},
  {path: "createevent", component: CreateEventComponent},
  {path: "updateevent/:eventID", component: UpdateEventComponent},
  {path: "mine", component: UserPageComponent},
  {path: "favorites", component: FavoritesPageComponent},
  { path: "", redirectTo: "/home", pathMatch: "full" }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
