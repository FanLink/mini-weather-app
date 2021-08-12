import { Location, WeatherDetails } from 'models';
import axiosClient from './axiosClient';

const weatherApi = {
  locationSearch(query: string): Promise<Location[]> {
    const url = `/search/?query=${query}`;
    return axiosClient.get(url);
  },
  getWeatherByLocationId(woeid: number): Promise<WeatherDetails> {
    const url = `/${woeid}`;
    return axiosClient.get(url);
  },
};
export default weatherApi;
