import {Injectable} from '@angular/core';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {GetMeteoService} from './get-meteo.service';

@Injectable()
export class MeteoCityDetailResolverService implements Resolve<any> {
    constructor(
        private getMeteoService: GetMeteoService,
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
        let id = +route.params['id'];
        return this.getMeteoService.getCity(id).map(city => {
            if (city) return city;
            else {
                this.router.navigate(['/meteo']);
                return null;
            }
        }).first();
    }
}
