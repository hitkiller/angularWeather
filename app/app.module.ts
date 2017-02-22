import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {CustomPreloadingStrategy} from './custom-preloading-strategy';

import {CoreModule}  from './core/core.module';
import {MapModule} from './map/map.module';
import {MeteoModule} from './meteo/meteo.module';
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
      PageNotFoundComponent,
      ComposeWidgetComponent
    ],
    bootstrap: [AppComponent],
    providers: [CustomPreloadingStrategy]
})

export class AppModule {
}
