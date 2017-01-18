import {Injectable} from '@angular/core';
import {Observer, Observable, BehaviorSubject} from 'rxjs';

@Injectable()
export class Geolocator {
    public getLocation = function getLocation(opts = { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 }): BehaviorSubject<any> {
        let defaultLocation = new BehaviorSubject({ latitude: 53, longitude: 27 });

        window.navigator.geolocation.getCurrentPosition((position) => {
            defaultLocation.next(position.coords);
        },
            (error) => {
                defaultLocation.error({
                    1: 'errors.location.permissionDenied',
                    2: 'errors.location.positionUnavailable',
                    3: 'errors.location.timeout'
                }[error.code]);
            }, opts);
        return defaultLocation;
    };
}
