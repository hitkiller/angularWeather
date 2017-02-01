import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'tempToFahrenheit'})
export class TempConversionPipe implements PipeTransform {
    transform(celsius?: number, args?):any {
        return celsius * 9/5 + 32;
      }
}
