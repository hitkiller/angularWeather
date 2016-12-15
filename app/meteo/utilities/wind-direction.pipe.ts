import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'windDescribe'})
export class WindDirectionPipe implements PipeTransform {
    transform(winddir: number) {
        if (winddir >= 326.25 && winddir <= 348.75) {
            return 'NNW';
        } else if (winddir >= 303.75 && winddir <= 326.24) {
            return 'NW';
        } else if (winddir >= 281.25 && winddir <= 303.74) {
            return 'WNW';
        } else if (winddir >= 258.75 && winddir <= 281.24) {
            return 'W';
        } else if (winddir >= 236.25 && winddir <= 258.74) {
            return 'WSW';
        } else if (winddir >= 213.75 && winddir <= 236.24) {
            return 'SW';
        } else if (winddir >= 191.25 && winddir <= 213.74) {
            return 'SSW';
        } else if (winddir >= 168.75 && winddir <= 191.24) {
            return 'S';
        } else if (winddir >= 146.25 && winddir <= 168.74) {
            return 'SSE';
        } else if (winddir >= 123.75 && winddir <= 146.24) {
            return 'SE';
        } else if (winddir >= 101.25 && winddir <= 123.74) {
            return 'ESE';
        } else if (winddir >= 78.75 && winddir <= 101.24) {
            return 'E';
        } else if (winddir >= 56.25 && winddir <= 78.74) {
            return 'ENE';
        } else if (winddir >= 33.75 && winddir <= 56.24) {
            return 'NE';
        } else if (winddir >= 11.25 && winddir <= 33.74) {
            return 'NNE';
        } else if (winddir >= 0.1 && winddir <= 11.24) {
            return 'N';
        }
        return '';
    }
}
