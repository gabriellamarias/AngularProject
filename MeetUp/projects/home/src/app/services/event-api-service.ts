import { HttpClient } from "@angular/common/http";
import { Injectable, Type } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { Event } from "../models/event";
import { Location } from "../models/location";

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

    createEvent(event:Event): Observable<Event> {
        return this.httpClient.post<Event>("https://localhost:44321/api/event/createevent", event)
    }

    deleteEvent(id: Number): Observable<Event> {
        return this.httpClient.delete<Event>(`https://localhost:44321/api/event/delete?id=${id}`)
    }

    updateEvent(id: Number, event:Event): Observable<Event> {
        return this.httpClient.patch<Event>(`https://localhost:44321/api/event/editevent?id=${id}`, event)
    }

    addFav(id: Number) {
        return this.httpClient.post("https://localhost:44321/api/favorite/addfav", id)
    }

    getFavs(): Observable<Event[]> {
        return this.httpClient.get<Event[]>("https://localhost:44321/api/favorite/seefav")
    }

}