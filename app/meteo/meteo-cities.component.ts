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

import {GetMeteoService} from './utilities/get-meteo.service';
import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {TempColorDirective} from './utilities/temp-color-conversion.directiive';
import {SearchPipe} from './utilities/search.pipe';

@Component({
    selector: 'meteo-cities',
    templateUrl: 'app/meteo/meteo-cities.component.html',
    styleUrls: ['app/meteo/css/meteo-cities.component.css'],
    providers: [GetMeteoService, TempConversionPipe, SearchPipe],
  //  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MeteoCitiesComponent implements OnInit {
    errorMessage: string;
    forecast: any[];

    public isInFavorites: boolean = false;

    public removeItem(item) {
        this.forecast.splice(this.forecast.indexOf(item), 1);
        console.log(`this.forecast length: ${this.forecast.length}`);
        return this.forecast = this.forecast.slice();
    }

    constructor(private http: Http, private getMeteoService: GetMeteoService) {
    }

    ngOnInit() {
        this.getMeteoService.getMeteo()
            .subscribe(
            data => this.getMeteoService.citiesData = data,
            error => this.errorMessage = <any>error
            );
    }
}
