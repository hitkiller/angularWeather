import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {TempConversionPipe} from './temp-measure-conversion.pipe';

describe('Test: TempConversionPipe', () => {

    let testee;

    beforeEach(() => {
        testee = new TempConversionPipe();
    });

    it('"positive"', () => {
        expect(testee.transform(90)).toEqual(194);
    });

    it('"negative"', () => {
        expect(testee.transform(-70)).toEqual(-94);
    });

    it('"zero"', () => {
        expect(testee.transform(0)).toEqual(32);
    });

    it('"decimal"', () => {
        expect(testee.transform(9.9999)).toEqual(49.99982);
    });

});
