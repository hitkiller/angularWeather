import {Component, Input, Output, EventEmitter, AfterContentInit} from '@angular/core';
import {FormsModule, NgForm}   from '@angular/forms';

import {UserSettings} from './data/user-settings.interface';
import {EmailValidatorDirective} from './utilities/email-validator.directive';

@Component({
    selector: 'user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./css/user-settings.component.css']
})

export class UserSettingsComponent implements AfterContentInit {
    @Output('setTemp') tempData = new EventEmitter<string>();
    @Output('toggleMaxTemp') maxtData = new EventEmitter<boolean>();
    @Output('toggleMinTemp') mintData = new EventEmitter<boolean>();

    public settings: UserSettings;

    setName = 'Default';

    setEmail = '';

    setTemps = [
        { value: 'celsius', display: 'Celsius' },
        { value: 'fahrenheit', display: 'Fahrenheit' }
    ];

    setOpts = ['max temperature', 'min temperature'];

    public changeTemp(temp: string) {
        this.tempData.emit(temp);
    }

    public toggleMaxTemp(maxt: boolean) {
        this.maxtData.emit(maxt);
    }

    public toggleMinTemp(mint: boolean) {
        this.mintData.emit(mint);
    }

    ngAfterContentInit() {
        this.settings = {
            setName: this.setName,
            setEmail: this.setEmail,
            setTemp: this.setTemps[0].value,
            setMaxTemp: false,
            setMinTemp: false
        }
    }

    onSubmit({ value, valid }: { value: UserSettings, valid: boolean }) {
        console.log(value, valid);
    }
}
