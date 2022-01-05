import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventApiService } from '../services/event-api-service';
import { createEvent } from '../models/create-event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  locations = ['Ford Field', 'Van Andel Arena', 'Detroit Institute of Arts',
   'Fox Theatre', 'The Fillmore'];

  model = new createEvent('', '', '', '', '', true, 0, 0.0 );
  locationID: Number = 0; 
  submitted = false;
  createdEvent = {} as Event
  events: Event[] = [];

  constructor(
    private eventAPIsvc: EventApiService
  ) { }

  ngOnInit(): void {
    
  }

  setLocation(location: String): Number{
    if (location == 'Van Andel Arena')
    {
      this.locationID = 1;
    }
    else if (location == 'Ford Field')
    {
      this.locationID = 2;
    }
    else if (location == 'Detroit Institute of Arts')
    {
      this.locationID = 3;
    }
    else if (location == 'Fox Theatre')
    {
      this.locationID = 4;
    }
    else if (location == 'The Fillmore')
    {
      this.locationID = 5
    }

    return this.locationID;
  } 

  newEvent() {
    this.model = new createEvent('','','', '', '', true, 0)
    console.log(this.model)
  }
  onSubmit() {
    this.submitted = true;
    this.locationID = this.setLocation(this.model.location);
    this.createdEvent = new Event(this.model.eventName, this.model.type, this.model.eventDate, this.model.eventDescription, this.locationID, true, this.model.eventPrice);
    console.log(this.createdEvent)
    console.dir(this.createdEvent)
    this.eventAPIsvc.createEvent(this.createdEvent).subscribe();
  }

}
