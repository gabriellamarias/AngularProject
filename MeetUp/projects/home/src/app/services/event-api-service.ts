import { HttpClient } from "@angular/common/http";
import { Injectable, Type } from "@angular/core";
import { EventPreviewComponent } from "../event-preview/event-preview.component";
import { Observable, throwError } from 'rxjs';
import { Event } from "../models/event";
import { Location } from "../models/location";
import { EventPreview } from "../models/event-preview";

@Injectable({
    providedIn: 'root'
})
export class EventApiService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getEvents(): Observable<Event[]> {
        return this.httpClient.get<Event[]>("https://localhost:44321/api/event")
    }

    getEvent(id?: Number): Observable<Event> {
        return this.httpClient.get<Event>(`https://localhost:44321/api/event/details?id=${id}`)
    }

    getLocation(): Observable<Location[]> {
        return this.httpClient.get<Location[]>("https://localhost:44321/event/api/location")

    }

    createEvent(event:Event): Observable<Event> {
        return this.httpClient.post<Event>("https://localhost:44321/api/event/createevent", event)
    }

    deleteEvent(id: Number): Observable<Event> {
        return this.httpClient.delete<Event>(`https://localhost:44321/api/event/delete?id=${id}`)
    }

    updateEvent(id: Number, event:Event): Observable<Event> {
        return this.httpClient.patch<Event>(`https://localhost:44321/api/event/editevent?id=${id}`, event)
    }

}