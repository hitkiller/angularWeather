import {Component, OnInit, OnChanges, AfterContentInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Geolocator } from '../map/geolocation.service';

import {MeteoData} from './meteo-data';

@Component({
    selector: 'meteo-cities',
    templateUrl: 'app/meteo/meteo-cities.component.html',
    styleUrls: ['app/meteo/meteo-cities.component.css'],
    providers: [Geolocator]
})


export class MeteoCitiesComponent implements OnInit {
    errorMessage: string;
    citiesData: MeteoData[];
    forecast: MeteoData[];

    private _units = 'metric';
    private _APPID = '47bc4e43962dbb173c1a3a7b2d5d0aa9';


    constructor(private http: Http, private geolocationService: Geolocator) { }

    ngOnInit() {
        this.getMeteo()
            .subscribe(
            data => this.citiesData = data,
            error => this.errorMessage = <any>error);
    }

    getMeteo() {
        return this.geolocationService.getLocation({ enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 }).flatMap(pos => this.http.get('http://api.openweathermap.org/data/2.5/find?lat=' + pos.coords.latitude + '&lon=' + pos.coords.longitude + '&cnt=50&units=' + this._units + '&APPID=' + this._APPID)).map((res: Response) => {
            this.citiesData = res.json().list;
            this.forecast = displayWeatherData(this.citiesData);
        })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

export function displayWeatherData(result: MeteoData[]) {
    let forecast = [];
    result.forEach((item) => {
        forecast.push({
            name: item.name,
            temp: item.main.temp,
            humidity: item.main.humidity,
            wind: item.wind.speed,
            pressure: item.main.pressure,
            clouds: item.clouds.all,
            description: item.weather[0].description,
            weather: item.weather[0].main
        })
    });
    return forecast;
}
