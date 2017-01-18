import {
    Component,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnInit,
    OnChanges,
    AfterContentInit
} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import {FormsModule}   from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {Geolocator} from '../map/geolocation.service';

import {MeteoData} from './meteo-data';
import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {TempColorDirective} from './utilities/temp-color-conversion.directiive';
import {SearchPipe} from './utilities/search.pipe';

import * as utilDisplayWeatherFunction from './utilities/display-weather-func';

@Component({
    selector: 'meteo-cities',
    templateUrl: 'app/meteo/meteo-cities.component.html',
    styleUrls: ['app/meteo/css/meteo-cities.component.css'],
    providers: [Geolocator, TempConversionPipe, SearchPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MeteoCitiesComponent implements OnInit {
    errorMessage: string;
    citiesData: MeteoData[];
    forecast: MeteoData[];
    private _units = 'metric';
    private _APPID = '47bc4e43962dbb173c1a3a7b2d5d0aa9';

    public isInFavorites: boolean = false;

    public removeItem(item) {
        this.forecast.splice(this.forecast.indexOf(item), 1);
        console.log(`this.forecast length: ${this.forecast.length}`);
        return this.forecast = this.forecast.slice();
    }

    constructor(private http: Http, private geolocationService: Geolocator, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.getMeteo()
            .subscribe(
            data => this.citiesData = data,
            error => this.errorMessage = <any>error
            );
    }

    getMeteo() {
        return this.geolocationService.getLocation()
            .flatMap(pos => this.http.get(`http://api.openweathermap.org/data/2.5/find?lat=${pos.latitude}&lon=${pos.longitude}&cnt=50&units=${this._units}&APPID=${this._APPID}`))
            .map((res: Response) => {
              //  setInterval(() => {
                    this.cd.markForCheck();
                    this.citiesData = res.json().list;
                    this.forecast = utilDisplayWeatherFunction.displayWeatherData(this.citiesData);
              //  }, 15000);
            })
            .publish()
            .refCount()
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
