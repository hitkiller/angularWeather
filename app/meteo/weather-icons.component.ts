import {Component, Input} from '@angular/core';

import * as utilGetTimeFunction from './utilities/get-time-func';

@Component({
    selector: 'current-weather-icons',
    template: `<span [ngSwitch]='period'>
                  <span *ngSwitchCase = "'day'" class='current_weather_image wi-day-{{icon | lowercase}}'></span>
                  <span *ngSwitchCase="'night'" class='current_weather_image wi-night-{{icon | lowercase}}'></span>
               </span>`,
    styleUrls: ['app/meteo/css/weather-icons-component.css'],
})

export class WeatherIconsComponent {
    public period = utilGetTimeFunction.getTimeOfDay();
    public icon: string;

    constructor() {
    }

    @Input() set iconSet(description: string) {
      this.icon = description;
      }
}
