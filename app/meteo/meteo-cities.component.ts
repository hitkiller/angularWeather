import {
    Component,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnInit,
    AfterContentInit
} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import {FormsModule}   from '@angular/forms';

import {GetMeteoService} from './utilities/get-meteo.service';
import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {TempColorDirective} from './utilities/temp-color-conversion.directiive';
import {SearchPipe} from './utilities/search.pipe';
import * as utilDisplayWeatherFunction from './utilities/display-weather-func';

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

    public isInFavorites: boolean = false;

    public removeItem(item:any) {
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
