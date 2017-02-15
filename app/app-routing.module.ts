import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    {
        path: 'map',
        loadChildren: './map/map.module#MapModule?sync=true'
    },
    {
        path: 'meteo',
        loadChildren: './meteo/meteo.module#MeteoModule?sync=true'
    },
    { path: '', redirectTo: '/meteo', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
