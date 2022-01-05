import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Event } from '../models/event';
import { EventApiService } from '../services/event-api-service';


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  selectedEvent = {} as Event;
  eventId: Number = 0;
  successful = false;
  linkToUpdate: string = '#';


  constructor(
    private route: ActivatedRoute,  
    private eventAPIsvc: EventApiService
  ) { }

  ngOnInit(): void {
    const eventid = this.route.snapshot.paramMap.get('eventID');
    if (eventid) {
      this.eventId = parseInt(eventid);
  }
  this.linkToUpdate = `updateevent/${this.eventId}`
  this.getSelectedEvent();
  
}

  getSelectedEvent() {
    this.eventAPIsvc.getEvent(this.eventId).subscribe((openEvent) => {
      console.log("[INFO]")
      console.log(openEvent)
      this.selectedEvent = openEvent;
    }
    )}

  deleteSelectedEvent() {
    console.log(this.eventId);
    this.eventAPIsvc.deleteEvent(this.eventId).subscribe();
    this.deleteSuccess();
  }

  deleteSuccess() {
      this.successful = true;
  }
  }





