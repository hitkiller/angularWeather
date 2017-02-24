import {Injectable} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    Request,
    RequestOptions,
    RequestMethod,
    URLSearchParams
} from '@angular/http';
import {Observer, Observable, BehaviorSubject} from 'rxjs';

import {GeolocationService} from '../../core/geolocation.service';

@Injectable()
export class GetMeteoService {
    _citiesData$: Observable<any> = null;
    _city$: Observable<any>;

    constructor(private http: Http, private geolocationService: GeolocationService) {
    }

    getMeteo() {
        const params = new URLSearchParams()
        params.append('cnt', '50')
        params.append('units', 'metric')
        params.append('APPID', '47bc4e43962dbb173c1a3a7b2d5d0aa9')

        const options = new RequestOptions({ method: RequestMethod.Get, search: params });

        if (!this._citiesData$) {
            this._citiesData$ = this.geolocationService.getLocation()
                .flatMap(pos => this.http.request(`http://api.openweathermap.org/data/2.5/find?lat=${pos.latitude}&lon=${pos.longitude}`, options))
                .map((res: Response) => res.json().list)
                .publishReplay(1)
                .refCount()
                .catch((error: any) => {
                    if (error.status == 502 || error.status == 504) console.log('Server error');
                    return Observable.throw(new Error(error.status));
                });
        }
        return this._citiesData$;
    }

    getCity(id: number) {
        return this.getMeteo()
            .map(_citiesData$ => _citiesData$.find(_city$ => _city$.id == id));
    }
}
