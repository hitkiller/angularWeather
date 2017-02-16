import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {slideInDownAnimation} from '../animations';

import {TempConversionPipe} from './utilities/temp-measure-conversion.pipe';
import {TempColorDirective} from './utilities/temp-color-conversion.directive';

@Component({
    selector: 'meteo-city-detail',
    templateUrl: './meteo-city-detail.component.html',
    animations: [slideInDownAnimation],
    styleUrls: ['./css/meteo-city-detail.component.css'],
    providers: [TempConversionPipe],
})

export class MeteoCityDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';

    city: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.data
            .subscribe((data: { city: any }) => {
                this.city = data.city;
            });
    }

    gotoMeteo() {
        this.router.navigate(['/meteo']);
    }
}
