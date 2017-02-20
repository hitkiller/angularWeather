import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {MeteoRoutes} from "./meteo-routing.module";
import {MeteoCitiesComponent} from "./meteo-cities.component";
import {MeteoCityDetailComponent} from "./meteo-city-detail.component";
import {WeatherIconsComponent} from "./weather-icons.component";
import {UserSettingsComponent} from "./user-settings.component";
import {SwitchThemeComponent} from "./switch-theme.component";
import {GetMeteoService} from './utilities/get-meteo.service';
import {MeteoCityDetailResolverService} from "./utilities/meteo-city-detail-resolver.service"
import {EmailValidatorDirective} from './utilities/email-validator.directive';
import {TempColorDirective} from './utilities/temp-color-conversion.directive';
import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {SearchPipe} from './utilities/search.pipe';

@NgModule({
    imports: [
        RouterModule.forChild(MeteoRoutes),
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        MeteoCitiesComponent,
        MeteoCityDetailComponent,
        WeatherIconsComponent,
        UserSettingsComponent,
        SwitchThemeComponent,
        EmailValidatorDirective,
        TempColorDirective,
        TempConversionPipe,
        SearchPipe
    ],
    providers: [
        GetMeteoService,
        MeteoCityDetailResolverService
    ],
    exports: [MeteoCitiesComponent]
})

export class MeteoModule {
}
