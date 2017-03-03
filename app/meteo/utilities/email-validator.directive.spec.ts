import {Component, forwardRef, Directive} from '@angular/core';
import {TestBed, getTestBed, async} from '@angular/core/testing';
import {FormsModule, NG_VALIDATORS, Validator, AbstractControl, NgForm} from '@angular/forms';
import {dispatchEvent} from '@angular/platform-browser/testing/browser_util';
import {By} from '@angular/platform-browser';

import {EmailValidatorDirective} from './email-validator.directive';

@Component({
    template: `<form><input type="email" name="email" ngModel validateEmail></form>`
})

class TestComponent {
    email;
}

describe('component: TestEmailComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TestComponent, EmailValidatorDirective]
        });
    });

    it('should validate', async(() => {
        let fixture = TestBed.createComponent(TestComponent);
        let comp = fixture.componentInstance;
        let debug = fixture.debugElement;
        let input = debug.query(By.css('[name=email]'));

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            input.nativeElement.value = '123';
            dispatchEvent(input.nativeElement, 'input');
            fixture.detectChanges();

            let form: NgForm = debug.children[0].injector.get(NgForm);
            let control = form.control.get('email');
            expect(control.hasError('validateEmail')).toBe(true);
            expect(form.control.valid).toEqual(false);
            expect(form.control.valid).toBe(false);
            expect(form.control.hasError('validateEmail', ['email'])).toEqual(true);

            input.nativeElement.value = 'tut@tut.by';
            dispatchEvent(input.nativeElement, 'input');
            fixture.detectChanges();

            expect(form.control.valid).toEqual(true);
        });
    }));
});
