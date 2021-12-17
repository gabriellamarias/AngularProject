import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventListComponent } from './all-event-list/all-event-list.component';
import { EventPreviewListComponent } from './event-preview-list/event-preview-list.component';

const routes: Routes = [
  {path: "event", component: EventPreviewListComponent},
  {path: "allevent", component: AllEventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
