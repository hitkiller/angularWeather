import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MapModule} from './map/map.module';
import {MeteoModule} from './meteo/meteo.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";

@NgModule({
    imports: [
        BrowserModule,
        MapModule,
        MeteoModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
