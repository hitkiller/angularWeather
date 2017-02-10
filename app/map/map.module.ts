import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MapRoutingModule} from "./map-routing.module";
import {MapComponent} from "./map.component";

@NgModule({
    imports: [CommonModule, MapRoutingModule],
    declarations: [MapComponent],
    exports: [MapComponent]
})

export class MapModule {
}
