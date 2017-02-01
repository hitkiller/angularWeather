import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CoreModule}  from './core/core.module';
import {MapModule} from './map/map.module';
import {MeteoModule} from './meteo/meteo.module';

import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        MapModule,
        MeteoModule,
        CoreModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
