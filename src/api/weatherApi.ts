import { META_WEATHER } from 'constants/constants';
import { Location, WeatherDetails } from 'models';
import axiosClient from './axiosClient';

const weatherApi = {
  // # @name locationSearch
  // params: query: string
  // PATCH {{baseUrl}}/search/?query=${query}
  locationSearch(query: string): Promise<Location[]> {
    const url = query
      ? `${META_WEATHER.META_WEATHER_PROXY}/location/search/?query=${query}`
      : `${META_WEATHER.META_WEATHER_PROXY}/location/search/?query=""`;
    return axiosClient.get(url);
  },

  // # @name getWeatherByLocationId
  // params: woeid: number
  // PATCH {{baseUrl}}/${woeid}
  getWeatherByLocationId(woeid: number): Promise<WeatherDetails> {
    const url = `/location/${woeid}`;
    return axiosClient.get(url);
  },
};
export default weatherApi;
