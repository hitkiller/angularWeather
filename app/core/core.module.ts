import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GeolocationService} from './utilities/geolocation.service';
import {GetCurrentPageTitleService} from './utilities/get-current-page-title.service';
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
      GetCurrentPageTitleService
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class CoreModule {
}
