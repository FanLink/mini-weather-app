import { Location, WeatherDetails } from 'models';
import axiosClient from './axiosClient';

const weatherApi = {
  // # @name locationSearch
  // params: query: string
  // PATCH {{baseUrl}}/search/?query=${query}
  locationSearch(query: string): Promise<Location[]> {
    const url = `/search/?query=${query}`;
    return axiosClient.get(url);
  },

  // # @name getWeatherByLocationId
  // params: woeid: number
  // PATCH {{baseUrl}}/${woeid}
  getWeatherByLocationId(woeid: number): Promise<WeatherDetails> {
    const url = `/${woeid}`;
    return axiosClient.get(url);
  },
};
export default weatherApi;
