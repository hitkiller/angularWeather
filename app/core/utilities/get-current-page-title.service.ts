import {Injectable} from '@angular/core';
import {Router, Routes, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class GetCurrentPageTitleService {
    public getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
        var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
        if (routeSnapshot.firstChild) {
            title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }
}
