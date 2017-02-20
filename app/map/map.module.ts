import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {MapRoutes} from "./map-routing.module";
import {MapComponent} from "./map.component";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(MapRoutes)],
    declarations: [MapComponent],
    exports: [MapComponent]
})

export class MapModule {
}
