import {Injectable} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import {Observer, Observable, BehaviorSubject} from 'rxjs';

import {GeolocationService} from '../../core/geolocation.service';

@Injectable()
export class GetMeteoService {
    private _units = 'metric';
    private _APPID = '47bc4e43962dbb173c1a3a7b2d5d0aa9';
    _citiesData$: Observable<any> = null;

    constructor(private http: Http, private geolocationService: GeolocationService) {
    }

    getMeteo() {
        if (!this._citiesData$) {
            this._citiesData$ = this.geolocationService.getLocation()
                .flatMap(pos => this.http.get(`http://api.openweathermap.org/data/2.5/find?lat=${pos.latitude}&lon=${pos.longitude}&cnt=50&units=${this._units}&APPID=${this._APPID}`))
                .map((res: Response) => res.json().list)
                .publishReplay(1)
                .refCount()
                .catch((error: any) => Observable.throw(new Error(error.status) || 'Server error'));
        }
        return this._citiesData$;
    }
}
