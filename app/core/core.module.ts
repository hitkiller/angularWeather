import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GeolocationService} from './utilities/geolocation.service';
import {HeaderCurrentTitleService} from './utilities/header-current-title.service';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
      GeolocationService,
      HeaderCurrentTitleService
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class CoreModule {
}
