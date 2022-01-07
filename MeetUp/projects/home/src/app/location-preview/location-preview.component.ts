import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../models/location';
import { LocationApiService } from '../services/location-api-service';

@Component({
  selector: 'app-location-preview',
  templateUrl: './location-preview.component.html',
  styleUrls: ['./location-preview.component.css']
})
export class LocationPreviewComponent implements OnInit {

  @Input() content!: Location;
  outputLocation = {} as Location;

  isLinkActive: boolean = true;
  linkToLocation: string = '#';


  constructor(
    private locationAPIsvc: LocationApiService
  ) { }

  ngOnInit(): void {
    this.linkToLocation = `/location/${this.content.locationID}`
  }

  getSelectedLocation() {
    this.locationAPIsvc.getLocation(this.content.locationID).subscribe((openLocation) => {
      console.log("[INFO]")
      console.log(openLocation)
      this.outputLocation = openLocation;
    }
    )}
}