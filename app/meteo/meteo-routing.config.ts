import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MeteoCitiesComponent} from "./meteo-cities.component";
import {MeteoCityDetailComponent} from "./meteo-city-detail.component";
import {MeteoCityDetailResolverService} from "./utilities/meteo-city-detail-resolver.service"

export const MeteoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'meteo',
            },
            {
                path: 'meteo',
                component: MeteoCitiesComponent,
                data: {
                    title: "Here's how the weather looks like for 50 nearest locations"
                }
            },
            {
                path: 'city/:id',
                component: MeteoCityDetailComponent,
                resolve: {
                    city: MeteoCityDetailResolverService
                },
                data: {
                    title: 'Detailed location weather description'
                }
            }
        ]
    }
];
