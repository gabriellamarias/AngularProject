import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventListComponent } from './all-event-list/all-event-list.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { EventPageComponent } from './event-page/event-page.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const routes: Routes = [
  {path: "events", component: AllEventListComponent},
  {path: "event/:eventID", component: EventPageComponent},
  {path: "createevent", component: CreateEventComponent},
  {path: "updateevent/:eventID", component: UpdateEventComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
