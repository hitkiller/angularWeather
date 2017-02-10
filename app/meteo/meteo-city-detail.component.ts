import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {GetMeteoService} from './utilities/get-meteo.service';
import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {TempColorDirective} from './utilities/temp-color-conversion.directive';
import * as utilDisplayWeatherFunction from './utilities/display-weather-func';

@Component({
    selector: 'meteo-city-detail',
    template: `
<h2>here will be city details</h2>
<div *ngIf="city">
  <div>
  <div>
    <label>Name: </label>
  </div>
  <p>
    <button>Back</button>
  </p>
</div>
`,
    styleUrls: ['./css/meteo-cities.component.css'],
    providers: [GetMeteoService, TempConversionPipe],
})

export class MeteoCityDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GetMeteoService
  ) {}


}
