import {Component} from '@angular/core';
import {Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {By} from '@angular/platform-browser';
import {Location, CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {ComponentFixture, TestBed, inject, async} from '@angular/core/testing';

import {NavComponent} from './nav.component';

@Component({
    template: ''
})
class DummyComponent {
}

describe('NavComponent', () => {
    let location, router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([
                { path: 'home', component: DummyComponent },
                {
                    path: 'widget',
                    component: DummyComponent,
                    outlet: 'aux'
                }
            ])],
            declarations: [NavComponent, DummyComponent]
        });
    });

    beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
        location = _location;
        router = _router;
    }));

    it('should get to home path', async(() => {
        let fixture = TestBed.createComponent(NavComponent);
        fixture.detectChanges();
        router.navigate(['/home']).then(() => {
            expect(location.path()).toBe('/home');
        });

    }));
    //  it('should support secondary routes', async(() => {
    //        let fixture = TestBed.createComponent(NavComponent);
    //        fixture.detectChanges();
    //        router.navigateByUrl('/home(aux:widget)').then(() => {
    //          expect(location.path()).toBe('/home(aux:widget)');
    //        });

    //    }));

});
