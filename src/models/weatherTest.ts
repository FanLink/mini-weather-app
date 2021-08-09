import { GeneralWeatherInfo } from 'features/weather/weatherSlice';
import { Weather } from './weather';

export const consolidatedWeatherListTest: Weather[] = [
  {
    id: 123,
    weather_state_name: 'text state name',
    weather_state_abbr: 'text state abbr',
    wind_direction_compass: 'text direction compass',
    created: 'text create',
    applicable_date: 'text applicable date',
    min_temp: 21,
    max_temp: 21,
    the_temp: 23,
    wind_speed: 31,
    wind_direction: 23,
    air_pressure: 22,
    humidity: 13,
    visibility: 221,
    predictability: 331,
  },
];
export const newConsolidatedWeatherListTest: Weather[] = [
  {
    id: 123,
    weather_state_name: 'new text state name',
    weather_state_abbr: 'new text state abbr',
    wind_direction_compass: 'new text direction compass',
    created: 'new text create',
    applicable_date: 'new text applicable date',
    min_temp: 21,
    max_temp: 21,
    the_temp: 23,
    wind_speed: 31,
    wind_direction: 23,
    air_pressure: 22,
    humidity: 13,
    visibility: 221,
    predictability: 331,
  },
];
export const generalWeatherInfoTest: GeneralWeatherInfo = {
  title: 'London',
  time: '2021-08-08T05:26:36.897078+01:00',
  sun_rise: '2021-08-08T05:35:11.398857+01:00',
  sun_set: '2021-08-08T20:36:02.511006+01:00',
  timezone: 'Europe/London',
  location_type: 'City',
  timezone_name: 'wh',
};
export const newGeneralWeatherInfoTest: GeneralWeatherInfo = {
  title: 'new London',
  time: 'new 2021-08-08T05:26:36.897078+01:00',
  sun_rise: 'new 2021-08-08T05:35:11.398857+01:00',
  sun_set: 'new 2021-08-08T20:36:02.511006+01:00',
  timezone: 'new Europe/London',
  location_type: 'new City',
  timezone_name: 'wh',
};
