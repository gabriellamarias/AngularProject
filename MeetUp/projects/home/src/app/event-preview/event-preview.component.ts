import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/event';
import { LoggerService } from '../services/logger.service';
import { EventApiService } from '../services/event-api-service';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {

  @Input() content!: Event;
  outputEvent = {} as Event;

  isLinkActive: boolean = true;
  linkToEvent: string = '#';


  constructor(
    private router: Router,
    private logSvc: LoggerService,
    private eventAPIsvc: EventApiService
  ) { }

  ngOnInit(): void {
    this.linkToEvent = `/event/${this.content.eventID}`
  }

  getSelectedEvent() {
    this.eventAPIsvc.getEvent(this.content.eventID).subscribe((openEvent) => {
      console.log("[INFO]")
      console.log(openEvent)
      this.outputEvent = openEvent;
    }
    )}
}


