import { HttpClient } from "@angular/common/http";
import { Injectable, Type } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { Location } from "../models/location";

@Injectable({
    providedIn: 'root'
})
export class LocationApiService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getLocations(): Observable<Location[]> {
        return this.httpClient.get<Location[]>("https://localhost:44321/api/location")
    }

    getLocation(id?: Number): Observable<Location> {
        return this.httpClient.get<Location>(`https://localhost:44321/api/location/details?id=${id}`)
    }
}