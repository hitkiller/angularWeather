import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AgmCoreModule} from 'angular2-google-maps/core';

import {CoreModule}  from './core/core.module';
import {MapModule} from './map/map.module';
import {MeteoModule} from './meteo/meteo.module';

import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        MapModule,
        MeteoModule,
        CoreModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAqihyZkP0kxB44SW-O6WBQI6b-syJyt2Y',
            libraries: ["places"]
        })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
