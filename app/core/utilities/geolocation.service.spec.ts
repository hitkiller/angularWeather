import {async, inject, TestBed} from '@angular/core/testing';
import {BehaviorSubject} from 'rxjs';

import {GeolocationService} from './geolocation.service';

describe('GeolocationService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [GeolocationService],
        });
    }));

    let geolocationService;

    beforeEach(() => {
        geolocationService = new GeolocationService();
    });

    it('should be able to be injected', () => {
        expect(geolocationService).toBeTruthy();
    });

    it('should return a BehaviorSubject', () => {
        let result = geolocationService.getLocation();
        expect(result).toEqual(jasmine.any(BehaviorSubject));
    });

    it('should return error with code2: "errors.location.positionUnavailable"', inject([GeolocationService], (testService: GeolocationService) => {
        spyOn(window.navigator.geolocation, 'getCurrentPosition').and.callFake(function(error) {
            error = { code: 2 };
            arguments[1](error);
        });
        testService.getLocation().subscribe(position => {
            console.log(position);
        }, error => {
            expect(error).toBe("errors.location.positionUnavailable");
        });
    }));

    it('should return predefined location values: 12.3 for latitude, and 32.1 for longitude', inject([GeolocationService], (testService: GeolocationService) => {
        spyOn(window.navigator.geolocation, 'getCurrentPosition').and.callFake(function() {
            var position = { coords: { latitude: 12.3, longitude: 32.1 } };
            arguments[0](position);
        });
        testService.getLocation().subscribe((position) => {
            expect(position.latitude).toEqual(12.3);
            expect(position.longitude).toEqual(32.1);
        });
    }));
});
