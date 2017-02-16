import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {slideInDownAnimation} from '../animations';

import {GetMeteoService} from './utilities/get-meteo.service';
import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {TempColorDirective} from './utilities/temp-color-conversion.directive';

@Component({
    selector: 'meteo-city-detail',
    templateUrl: './meteo-city-detail.component.html',
    animations: [slideInDownAnimation],
    styleUrls: ['./css/meteo-city-detail.component.css'],
    providers: [GetMeteoService, TempConversionPipe],
})

export class MeteoCityDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';

    city: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private getMeteoService: GetMeteoService
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.getMeteoService.getCity(+params['id']))
            .subscribe((city: any) => this.city = city);
    }

    gotoMeteo() {
        this.router.navigate(['/meteo']);
    }
}
