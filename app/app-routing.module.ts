import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './not-found.component';

export const AppRoutes: Routes = [
    {
        path: 'map',
        loadChildren: './map/map.module#MapModule'
    },
    {
        path: 'meteo',
        loadChildren: './meteo/meteo.module#MeteoModule'
    },
    { path: "", redirectTo: '/meteo', pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent }
];
