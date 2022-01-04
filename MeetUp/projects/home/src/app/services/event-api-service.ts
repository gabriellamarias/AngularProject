import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EventPreviewComponent } from "../event-preview/event-preview.component";
import { Observable, throwError } from 'rxjs';
import { Event } from "../models/event";
import { EventPreview } from "../models/event-preview";

@Injectable({
    providedIn: 'root'
})
export class EventApiService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getEvents(): Observable<Event[]> {
        return this.httpClient.get<Event[]>("https://localhost:44321/event")
    }

    getEvent(id: Number): Observable<Event> {
        return this.httpClient.get<Event>(`https://localhost:44321/event/details?id=${id}`)
    }

}