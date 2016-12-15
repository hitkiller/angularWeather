import {Injectable} from '@angular/core';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Geolocator {
    public getLocation = function getLocation(opts): Observable<any> {
        return Observable.create(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.watchPosition((position) => {
                    observer.next(position);
                },
                    (error) => {
                        observer.error({
                            1: 'errors.location.permissionDenied',
                            2: 'errors.location.positionUnavailable',
                            3: 'errors.location.timeout'
                        }[error.code]);
                    }, opts);
            } else {
                observer.error('errors.location.unsupportedBrowser');
            }
        });
    }
}
