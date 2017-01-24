import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AgmCoreModule, MapsAPILoader} from 'angular2-google-maps/core';

import {MapComponent} from "./map.component";
import {GeolocationService} from './geolocation.service';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAqihyZkP0kxB44SW-O6WBQI6b-syJyt2Y',
            libraries: ["places"]
        })
    ],
    declarations: [
        MapComponent
    ],
    providers: [GeolocationService],
    exports: [MapComponent]
})

export class MapModule {
}
