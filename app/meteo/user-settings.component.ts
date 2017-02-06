import {Component, Input} from '@angular/core';
import {FormsModule}   from '@angular/forms';

import {UserSettings} from './data/user-settings.interface';

@Component({
    selector: 'user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./css/user-settings.component.css'],
})

export class UserSettingsComponent {
    public settings: UserSettings;

    citiesNums = [50, 40, 30, 20, 10];

    displayOpts = [
        { value: 'f', display: 'Fahrenheit' },
        { value: 'c', display: 'Celsius' }
    ];

    paramOpts = [
        { value: 'humidity', display: 'Humidity' },
        { value: 'clouds', display: 'Clouds' },
        { value: 'pressure', display: 'Pressure' }
    ];

    ngOnInit() {
        this.settings = {
            setName: '',
            setEmail: '',
            citiesNums: this.citiesNums[0],
            displayOpts: this.displayOpts[0].value,
            paramOpts: [this.paramOpts[1].value]
        }
    }

    save(isValid: boolean, f: UserSettings) {
        if (!isValid) return;
        console.log(f);
    }

}
