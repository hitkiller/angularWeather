import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  public latitude: number;
  public longitude: number;
  public zoom: number;

  public setCurrentPosition() {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
              this.zoom = 15;
          });
      }
  }
}
