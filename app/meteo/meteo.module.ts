import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MeteoCitiesComponent} from "./meteo-cities.component";
import {WeatherIconsComponent} from "./weather-icons.component";
import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {TempColorDirective} from './utilities/temp-color-conversion.directiive';
import {SearchPipe} from './utilities/search.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        MeteoCitiesComponent,
        WeatherIconsComponent,
        TempConversionPipe,
        TempColorDirective,
        SearchPipe
    ],
    exports: [MeteoCitiesComponent]
})

export class MeteoModule {
}
