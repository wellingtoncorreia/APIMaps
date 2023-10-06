import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  map:any;
  lat: number = 0;
  long: number = 0;

  constructor() { }
  
  ngOnInit(): void {
    this.capturalocalicacao();
  }

  

  capturalocalicacao() {
    // captura a localização do usuário
     navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude - 0.0068;
      this.long = position.coords.longitude - 0.001;

     });
    }
}
