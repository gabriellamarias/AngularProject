import { Component, OnInit } from '@angular/core';
import { LocationApiService } from '../services/location-api-service';
import { Location } from '../models/location';

@Component({
  selector: 'app-all-location-list',
  templateUrl: './all-location-list.component.html',
  styleUrls: ['./all-location-list.component.css']
})
export class AllLocationListComponent implements OnInit {

  locations: Location[] = [];

  constructor(
    private locationAPIsvc: LocationApiService
  ) { }

  ngOnInit(): void {
    this.addDefaultLocations();
  }

  addDefaultLocations() {
    this.locationAPIsvc.getLocations().subscribe((locations) => {
      console.log("[INFO]")
      console.log(locations)
      this.locations = locations;
    })
  }
}