/// <reference path="../../typings/index.d.ts" />

import {Component, OnInit} from '@angular/core';

import {GeolocationService} from '../core/utilities/geolocation.service';

@Component({
    selector: 'google-map',
    template: `<div id="gmap"></div>`,
    styles: ['#gmap { width:100%; height:380px; }'],
    providers: [GeolocationService]
})

export class MapComponent implements OnInit {
    latitude: number;
    longitude: number;
    err: string;

    constructor(private geolocationService: GeolocationService) {
    }

    ngOnInit() {
        this.geolocationService.getLocation()
            .retryWhen(error => error.delay(9000))
            .subscribe(pos => {
                this.latitude = pos.latitude;
                this.longitude = pos.longitude;
            }, err => {
                this.err = err;
                console.log(err);
            })

        let map = new google.maps.Map(document.getElementById('gmap'), {
            zoom: 12,
            center: {lat: this.latitude, lng: this.longitude},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }
}
