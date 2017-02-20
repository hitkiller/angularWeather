import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MapComponent} from "./map.component";

export const MapRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'map',
            },
            {
                path: 'map',
                component: MapComponent
            }
        ]
    }
];
