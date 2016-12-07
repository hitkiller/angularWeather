/// <reference path="../typings/index.d.ts" />

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Sys {
    country: string;
}

export interface Clouds {
    all: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MeteoData {
    id: number;
    name: string;
    coord: Coord;
    main: Main;
    dt: number;
    wind: Wind;
    sys: Sys;
    clouds: Clouds;
    weather: Weather[];
}
