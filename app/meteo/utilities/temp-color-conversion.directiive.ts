import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[bgColor]',
    inputs: ['bgColor']
})
export class TempColorDirective {
    constructor(private el: ElementRef) {
        this.el = el;
    }
    set bgColor(temp: number) {
        if (temp <= -10) this.el.nativeElement.style.backgroundColor = 'rgba(0, 175, 190, 0.3)';
        else if (temp <= -5 && temp > -10) this.el.nativeElement.style.backgroundColor = 'rgba(0, 175, 190, 0.2)';
        else if (temp < 0 && temp > -5) this.el.nativeElement.style.backgroundColor = 'rgba(0, 175, 190, 0.07)';
        else if (temp > 0 && temp <= 5) this.el.nativeElement.style.backgroundColor = 'rgba(240, 85, 20, 0.07)';
        else if (temp > 5 && temp <= 15) this.el.nativeElement.style.backgroundColor = 'rgba(240, 85, 20, 0.1)';
        else if (temp > 15 && temp <= 25) this.el.nativeElement.style.backgroundColor = 'rgba(240, 85, 20, 0.2)';
        else if (temp > 25) this.el.nativeElement.style.backgroundColor = 'rgba(240, 85, 20, 0.3)';
    }
}
