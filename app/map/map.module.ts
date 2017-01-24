import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AgmCoreModule, MapsAPILoader} from 'angular2-google-maps/core';

import {MapComponent} from "./map.component";

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule
    ],
    declarations: [MapComponent],
    exports: [MapComponent]
})

export class MapModule {
}
