import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {TempConversionPipe} from './temp-measure-conversion.pipe';

describe('TempConversionPipe', () => {

    let testee;

    beforeEach(() => {
        testee = new TempConversionPipe();
    });

    it('should convert positive temperatures', () => {
        expect(testee.transform(90)).toEqual(194);
    });

    it('should convert negative temperatures', () => {
        expect(testee.transform(-70)).toEqual(-94);
    });

    it('should convert zero to 32', () => {
        expect(testee.transform(0)).toEqual(32);
    });

    it('should accept decimal temperature numbers as well', () => {
        expect(testee.transform(9.9999)).toEqual(49.99982);
    });

});
