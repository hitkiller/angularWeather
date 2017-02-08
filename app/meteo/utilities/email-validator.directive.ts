import {Directive, forwardRef} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';

@Directive({
    selector: '[validateEmail][formControlName], [validateEmail][formControl],[validateEmail][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
    ]
})
export class EmailValidatorDirective implements Validator {

    constructor() {
    }

    validate(c: AbstractControl) {
        let EMAIL_REGEXP =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }
}
