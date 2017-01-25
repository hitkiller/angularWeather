import {Injectable} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import {Observer, Observable, BehaviorSubject} from 'rxjs';

import {GeolocationService} from '../../core/geolocation.service';
import {MeteoDataInterface} from '../data/meteo-data-interface';
import * as utilDisplayWeatherFunction from './display-weather-func';

@Injectable()
export class GetMeteoService {
    citiesData: MeteoDataInterface[];
    forecast: any[];
    private _units = 'metric';
    private _APPID = '47bc4e43962dbb173c1a3a7b2d5d0aa9';
    _citiesData$: Observable<any> = null;

    constructor(private http: Http, private geolocationService: GeolocationService) {
    }

    getMeteo() {
        if (!this._citiesData$) {
            this._citiesData$ = this.geolocationService.getLocation()
                .flatMap(pos => this.http.get(`http://api.openweathermap.org/data/2.5/find?lat=${pos.latitude}&lon=${pos.longitude}&cnt=50&units=${this._units}&APPID=${this._APPID}`))
                .map((res: Response) => {
                    //this.cd.markForCheck();
                    this.citiesData = res.json().list;
                    this.forecast = utilDisplayWeatherFunction.displayWeatherData(this.citiesData);
                })
                .publishReplay(1)
                .refCount()
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }
        return this._citiesData$;
    }
}
