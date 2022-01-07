import { Component, OnInit } from '@angular/core';
import { EventApiService } from '../services/event-api-service';
import { Event } from '../models/event';


@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  events: Event[] = [];

  constructor(
    private eventAPIsvc: EventApiService
  ) { }

  ngOnInit(): void {
    this.addDefaultEvents();
  }

  addDefaultEvents() {
    this.eventAPIsvc.getFavs().subscribe((events) => {
      console.log("[INFO]")
      console.log(events)
      this.events = events;
    })
  }
}