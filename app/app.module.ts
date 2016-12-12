import {NgModule}      from '@angular/core';
import {HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

import {AppComponent}  from './app.component';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {MapComponent} from "./map/map.component";
import {MeteoCitiesComponent} from "./meteo/meteo-cities.component";

import { Geolocator } from './map/geolocation.service';

@NgModule({
    imports: [BrowserModule, HttpModule,
        AgmCoreModule.forRoot({
             apiKey: 'AIzaSyAqihyZkP0kxB44SW-O6WBQI6b-syJyt2Y', libraries: ["places"]
        })],
    declarations: [AppComponent, HeaderComponent, FooterComponent, MapComponent, MeteoCitiesComponent],
    bootstrap: [AppComponent],
    providers: [Geolocator]
})

export class AppModule { }
