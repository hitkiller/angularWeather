import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MeteoCitiesComponent} from "./meteo-cities.component";
import {MeteoCityDetailComponent} from "./meteo-city-detail.component";

const meteoCitiesRoutes: Routes = [
    { path: '', component: MeteoCitiesComponent },
    { path: 'city/:id', component: MeteoCityDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(meteoCitiesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MeteoRoutingModule { }
