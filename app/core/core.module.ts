import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GeolocationService} from './geolocation.service';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [GeolocationService],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class CoreModule {
}
