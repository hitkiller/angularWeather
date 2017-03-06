import {Component} from '@angular/core';

@Component({
    selector: 'navigation',
    template: `
    <nav>
      <a routerLink="/meteo" routerLinkActive="active">Meteo Cities</a>
      <a routerLink="/map" routerLinkActive="active">Current location map</a>
      <a [routerLink]="[{ outlets: { widget: ['compose'] } }]" routerLinkActive="active">Weather widget (two nearest locations)</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="widget"></router-outlet>
    `,
    styleUrls: ['./nav.component.css']
})

export class NavComponent {
}
