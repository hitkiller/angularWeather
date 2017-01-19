import {MeteoData} from './../meteo-data';

export function displayWeatherData(result: MeteoData[]) {
    let forecast = result.map((item) => {
        return {
            name: item.name,
            temp: item.main.temp,
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
