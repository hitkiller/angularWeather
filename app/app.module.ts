import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {CoreModule}  from './core/core.module';
import {MapModule} from './map/map.module';
import {MeteoModule} from './meteo/meteo.module';
import {PageNotFoundComponent}   from './not-found.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        MapModule,
        MeteoModule,
        CoreModule
    ],
    declarations: [AppComponent, PageNotFoundComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
