import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventApiService } from '../services/event-api-service';
import { createEvent } from '../models/create-event';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  locations = ['Ford Field', 'Van Andel Arena', 'Detroit Institute of Arts',
  'Fox Theatre', 'The Fillmore'];

  eventId: Number = 0;
  oldEvent = {} as Event;
  locationID: Number = 0; 
  submitted = false;
  updateEvent = {} as createEvent;
  updatedEvent = {} as Event;
  events: Event[] = [];
  locationString: String = '';

 constructor(
   private eventAPIsvc: EventApiService,
   private route: ActivatedRoute,  
 ) { }

 ngOnInit(): void {
   const eventid = this.route.snapshot.paramMap.get('eventID');
    if (eventid) {
      this.eventId = parseInt(eventid);
    }
    this.getSelectedEvent();
 }

 getSelectedEvent() {
  this.eventAPIsvc.getEvent(this.eventId).subscribe((openEvent) => {
    console.log("[INFO]")
    console.log(openEvent)
    this.oldEvent = openEvent;
    this.setLocationString(this.oldEvent.location)
  }
  )}

  setLocationString(location: Number): String{
    if (location == 1)
    {
      this.locationString = 'Van Andel Arena'
    }
    else if (location == 2)
    {
      this.locationString = 'Ford Field'
    }
    else if (location == 3)
    {
      this.locationString = 'Detroit Institute of Arts'
    }
    else if (location == 4)
    {
      this.locationString = 'Fox Theatre'
    }

    else if (location == 5)
    {
      this.locationString = 'The Fillmore'
    }
    console.log("[INFO]")
    console.log(this.locationString)
    return this.locationString;
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

   console.log(this.locationID)
   return this.locationID;
 } 

 onSubmit() {
   this.submitted = true;
   this.updateEvent = new createEvent(this.oldEvent.eventName, this.oldEvent.type, this.oldEvent.eventDate, this.oldEvent.eventDescription, this.locationString, true, this.oldEvent.eventPrice);
   console.log(this.updateEvent);
   this.locationID = this.setLocation(this.updateEvent.location);
   this.updatedEvent = new Event(this.updateEvent.eventName, this.updateEvent.type, this.updateEvent.eventDate, this.updateEvent.eventDescription, this.locationID, true, this.updateEvent.eventPrice);
   console.log(this.updatedEvent)
  this.eventAPIsvc.updateEvent(this.eventId, this.updatedEvent).subscribe();
 }

}
