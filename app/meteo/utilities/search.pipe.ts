import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'searchCity'})
export class SearchPipe implements PipeTransform {
    transform(value:any, cityName:string) {
        if (value == null || value == "") return null;
        else if (cityName !== undefined) return value.filter((item:any) => item.name.toLowerCase().indexOf(cityName.toLowerCase()) !== -1);
        return value;
    }
}
