import {MeteoDataInterface} from '../data/meteo-data.interface';

export function displayWeatherData(result: MeteoDataInterface[]) {
    let forecast = result.map((item) => {
        return {
            name: item.name,
            temp: item.main.temp,
            tempmax: item.main.temp_max,
            tempmin: item.main.temp_min,
            humidity: item.main.humidity,
            wind: item.wind.speed,
            winddir: item.wind.deg,
            pressure: item.main.pressure,
            clouds: item.clouds.all,
            description: item.weather[0].description,
            weather: item.weather[0].main
        };
    });
    return forecast;
}
