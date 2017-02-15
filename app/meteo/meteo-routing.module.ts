import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MeteoCitiesComponent} from "./meteo-cities.component";
import {MeteoCityDetailComponent} from "./meteo-city-detail.component";
import {MeteoCityDetailResolverService} from "./utilities/meteo-city-detail-resolver.service"

const meteoCitiesRoutes: Routes = [
    { path: '', component: MeteoCitiesComponent },
    {
        path: 'city/:id',
        component: MeteoCityDetailComponent,
        resolve: {
            city: MeteoCityDetailResolverService
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(meteoCitiesRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        MeteoCityDetailResolverService
    ]
})

export class MeteoRoutingModule { }
