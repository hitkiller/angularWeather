import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {requestOptionsProvider}   from './default-request-options.service';
import {CustomPreloadingStrategy} from './custom-preloading-strategy';

import {CoreModule}  from './core/core.module';
import {MapModule} from './map/map.module';
import {MeteoModule} from './meteo/meteo.module';
import {NavComponent} from "./core/nav.component";
import {ComposeWidgetComponent} from './meteo/compose-widget.component';
import {PageNotFoundComponent}   from './not-found.component';

import {AppRoutes} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes,
          {preloadingStrategy: CustomPreloadingStrategy}),
        CoreModule,
        BrowserModule,
        MeteoModule,
        MapModule
    ],
    declarations: [
      AppComponent,
      NavComponent,
      PageNotFoundComponent,
      ComposeWidgetComponent
    ],
    bootstrap: [AppComponent],
    providers: [
      CustomPreloadingStrategy,
      requestOptionsProvider
    ]
})

export class AppModule {
}
