import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/event';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {

  @Input() content!: Event;
  
  isLinkActive: boolean = true;
  linkToEvent: string = '#';

  constructor(
    private router: Router,
    private logSvc: LoggerService
  ) { }

  ngOnInit(): void {
    this.linkToEvent = `/event/${this.content.eventName}`
    this.logSvc.log("EventPreviewComponentList");
  }

  printEventToConsole() {
    console.log(`Button for ${this.content.eventName}`)
  }



}
