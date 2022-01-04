import { Component, OnInit } from '@angular/core';
import { EventApiService } from '../services/event-api-service';
import { Event } from '../models/event';

@Component({
  selector: 'app-all-event-list',
  templateUrl: './all-event-list.component.html',
  styleUrls: ['./all-event-list.component.css']
})
export class AllEventListComponent implements OnInit {

  events: Event[] = [];

  constructor(
    private eventAPIsvc: EventApiService
  ) { }

  ngOnInit(): void {
    this.addDefaultEvents();
  }

  addDefaultEvents() {
    this.eventAPIsvc.getEvents().subscribe((events) => {
      console.log("[INFO]")
      console.log(events)
      this.events = events;
    })
  }

}
