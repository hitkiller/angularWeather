import {Component} from '@angular/core';

@Component({
    selector: 'weather-app',
    template: `
    <header-panel></header-panel>
    <nav>
      <a routerLink="/meteo" routerLinkActive="active">Meteo Cities</a>
      <a routerLink="/map" routerLinkActive="active">Current location map</a>
    </nav>
    <router-outlet></router-outlet>
    <footer-panel></footer-panel>
    `,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
}
