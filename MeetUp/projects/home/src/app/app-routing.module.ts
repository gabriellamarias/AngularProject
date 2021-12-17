import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventListComponent } from './all-event-list/all-event-list.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { EventPageComponent } from './event-page/event-page.component';

const routes: Routes = [
  {path: "events", component: AllEventListComponent},
  {path: "event/:name", component: EventPageComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
