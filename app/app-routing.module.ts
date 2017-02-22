import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ComposeWidgetComponent}  from './meteo/compose-widget.component';
import {PageNotFoundComponent} from './not-found.component';
import {CustomPreloadingStrategy} from './custom-preloading-strategy';

export const AppRoutes: Routes = [
    {
        path: 'compose',
        component: ComposeWidgetComponent,
        outlet: 'widget'
    },
    {
        path: 'map',
        loadChildren: './map/map.module#MapModule'
    },
    {
        path: 'meteo',
        loadChildren: './meteo/meteo.module#MeteoModule',
        data: { preload: true }
    },
    { path: "", redirectTo: '/meteo', pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent }
];
