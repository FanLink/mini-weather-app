export const AXIOS_CLIENT = {
  // Because Meta Weathers blocks CORS, so I use thingproxy prefix for CORS Proxies 
  // referecce: https://github.com/Freeboard/thingproxy
  BASE_URL: 'https://thingproxy.freeboard.io/fetch/http://www.metaweather.com/api/location',
};
export const META_WEATHER = {
  IMG_URL: 'https://www.metaweather.com/static/img/weather',
};
export const ERROR_MESSAGE = {
  SEARCH_LOCATION_FAILED: 'Failed to search location list, reason:',
  GET_WEATHER_FAILED: 'Failed to get weather by location id, reason:',
};
