import {Component, HostBinding, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import {GetMeteoService} from './utilities/get-meteo.service';
import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {TempColorDirective} from './utilities/temp-color-conversion.directive';
import * as utilDisplayWeatherFunction from './utilities/display-weather-func';
import {slideInDownAnimation} from '../animations';

@Component({
    templateUrl: './compose-widget.component.html',
    styleUrls: ['./css/compose-widget.component.css'],
    providers: [GetMeteoService, TempConversionPipe],
    animations: [slideInDownAnimation]
})
export class ComposeWidgetComponent implements OnInit, OnDestroy {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    private subscription;
    widget_weather: any[];

    constructor(private router: Router, private getMeteoService: GetMeteoService) { }

    ngOnInit() {
        this.subscription = this.getMeteoService.getMeteo()
            .subscribe(response => {
                this.widget_weather = utilDisplayWeatherFunction.displayWeatherData(response);
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    cancel() {
        this.closeWidget();
    }

    closeWidget() {
        this.router.navigate([{ outlets: { widget: null } }]);
    }
}
