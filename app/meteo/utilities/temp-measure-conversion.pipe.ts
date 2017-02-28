import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'tempToFahrenheit'})
export class TempConversionPipe implements PipeTransform {
    transform(celsius?: number, args?):number {
        return celsius * 9/5 + 32;
      }
}
