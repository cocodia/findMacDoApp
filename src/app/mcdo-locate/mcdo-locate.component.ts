import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Position from '../Position';
import { PositionService } from '../position.service';
import { MapsService } from '../maps.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mcdo-locate',
  templateUrl: './mcdo-locate.component.html',
  styleUrls: ['./mcdo-locate.component.css']
})
export class McdoLocateComponent implements OnInit {
  subscription: Subscription;

  public lat: number;
  public lng: number;
  public zoom: number;

  public openedWindow: number;

   markers:any = [];
   locations: any = [];
  constructor(
    private ps: PositionService,
    private route: ActivatedRoute,
    private router: Router,
    private mapApiLoader: MapsAPILoader,
    private mapsService: MapsService
  ) {
  
  this.subscription =   this.ps.getLocations().subscribe(locations => {
      this.locations = locations;

      /**create location's markers */
     for(let location of this.locations){
      this.markers.push({
        lat: location.latitude, 
        lng: location.longitude,
        name: location.name,
        address: location.address,
        phonenumber: location.phonenumber
        });
    }
      
  });



   }

  ngOnInit() {
    
    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = this.mapsService.zoom;

    this.setCurrentPosition();
    this.mapApiLoader.load();

    // Zoom to new location after search
    this.mapsService.newCoordinators.subscribe(
      (coords: { lat: number, lng: number, zoom: number }) => {
        if (coords) {
          this.lat = coords.lat;
          this.lng = coords.lng;
          this.zoom = coords.zoom;
          this.mapApiLoader.load();
        }
      }
    );

    // Open window after click on panel
    this.mapsService.openWindow.subscribe(
      index => {
        this.openedWindow = +index;
      }
    );
  }

  mapClicked($event: MouseEvent) {
    console.log($event);
  }

  clickedMarker(label: string, index: number) {
    console.log(`Clicked the marker: ${label || index}`);
    this.openedWindow = index;
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = this.mapsService.lat = position.coords.latitude;
        this.lng = this.mapsService.lng = position.coords.longitude;
        this.zoom = 10;
      });
    }

  }

  isInfoWindowOpen(index: number) {
    return this.openedWindow === index;
  }
}