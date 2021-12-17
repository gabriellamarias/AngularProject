import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/event-preview';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-event-preview-list',
  templateUrl: './event-preview-list.component.html',
  styleUrls: ['./event-preview-list.component.css']
})
export class EventPreviewListComponent implements OnInit {

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
