export interface Location{
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}
export interface LocationOption {
  label: string,
  value: number
}

export interface Weather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}
export interface Source {
  title: string;
  url: string;
}
export interface WeatherDetails {
  consolidated_weather: Weather[];
  parent: Location;
  sources: Source[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;

}