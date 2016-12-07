/// <reference path="../typings/index.d.ts" />

import { Component, OnInit} from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { GeolocationService } from './geolocation.service';

@Component({
    selector: 'google-map',
    template: `<sebm-google-map [latitude]="latitude" [longitude]="longitude" [scrollwheel]="false" [zoom]="zoom">
        <sebm-google-map-marker [latitude]="latitude" [longitude]="longitude"></sebm-google-map-marker>
      </sebm-google-map>`,
    styles: ['.sebm-google-map-container { height: 300px; }'],
    providers: [GeolocationService]
})

export class MapComponent implements OnInit {

    public latitude: number;
    public longitude: number;
    public zoom: number;

    constructor(
        private mapsAPILoader: MapsAPILoader
    ) { }

    ngOnInit() {
        //set current position
        this.mapsAPILoader.load().then(() => {
            this.setCurrentPosition();
        });
    }

    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
            });
        }
    }

}
