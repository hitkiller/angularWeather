import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, Routes, ActivatedRouteSnapshot} from '@angular/router';

import {GetCurrentPageTitleService} from './utilities/get-current-page-title.service';

@Component({
    selector: 'header-panel',
    template: `<h1>{{title}}</h1>`,
    styles: [`
         h1 {
          font-family: Georgia, "Times New Roman", Times, serif;
          font-size: 2em;
          margin-top: 20px;
          margin-bottom: 20px;
          text-align: center;
          font-weight: normal;
          color: #222;
     }`],
    providers: [GetCurrentPageTitleService]
})

export class HeaderComponent implements OnInit {
    constructor(private router: Router, private getCurrentTitleService: GetCurrentPageTitleService) { }

    title: string = "Weather app";

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.title = this.getCurrentTitleService.getDeepestTitle(this.router.routerState.snapshot.root);
            }
        });
    }
}
