import { Location, WeatherDetails } from "models";
import axiosClient from "./axiosClient";

const weatherApi = {
  locationSearch(query:string):Promise<Location[]>{
    const url = query ?`/location/search/?query=${query}` : `/location/search/?query=""`;
    return axiosClient.get(url);
  },
  getWeatherByLocationId(woeid:number): Promise<WeatherDetails>{
    const url = `/location/${woeid}`;
    return axiosClient.get(url)
  }
}
export default weatherApi;