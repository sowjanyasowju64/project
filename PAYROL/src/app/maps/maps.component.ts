import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  onChoseLocation(event){
   this.lat = event.coords.lat;
   this.lng = event.coords.lng
  }
  constructor() { }

  ngOnInit() {
  }

}
