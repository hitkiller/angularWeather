import {
    Component,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnInit,
    Input,
    EventEmitter
} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {GetMeteoService} from './utilities/get-meteo.service';
import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {TempColorDirective} from './utilities/temp-color-conversion.directive';
import {SearchPipe} from './utilities/search.pipe';
import * as utilDisplayWeatherFunction from './utilities/display-weather-func';
import {UserSettingsComponent} from "./user-settings.component";
import {SwitchThemeComponent} from "./switch-theme.component";

@Component({
    selector: 'meteo-cities',
    templateUrl: './meteo-cities.component.html',
    styleUrls: ['./css/meteo-cities.component.css'],
    providers: [GetMeteoService, TempConversionPipe, SearchPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MeteoCitiesComponent implements OnInit {
    errorMessage: string;
    forecast: any[];
    cityName: string;

    value: boolean = false;

    userSetTemp: string = 'celsius';
    userOptMaxTemp: boolean = false;
    userOptMinTemp: boolean = false;

    public tempEvent(setTemp: string) {
        this.userSetTemp = setTemp;
    }

    public maxTempEvent(setMaxTemp: boolean) {
        this.userOptMaxTemp = setMaxTemp;
    }

    public minTempEvent(setMinTemp: boolean) {
        this.userOptMinTemp = setMinTemp;
    }

    public isInFavorites: boolean = false;

    public removeItem(item: any) {
        this.forecast.splice(this.forecast.indexOf(item), 1);
        return this.forecast = this.forecast.slice();
    }

    constructor(private http: Http, private getMeteoService: GetMeteoService, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.getMeteoService.getMeteo()
            .subscribe(response => {
                this.forecast = utilDisplayWeatherFunction.displayWeatherData(response),
                    this.cd.markForCheck();
            });
    }
}
