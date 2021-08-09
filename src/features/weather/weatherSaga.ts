import { PayloadAction } from '@reduxjs/toolkit';
import weatherApi from 'api/weatherApi';
import { call, put, takeLatest } from 'redux-saga/effects';
import { weatherActions } from './weatherSlice';
import { Weather, WeatherDetails } from 'models';
import { toast } from 'react-toastify';
import { ERROR_MESSAGE } from 'constants/constants';

function* getWeatherByLocationId(action: PayloadAction<number>) {
  try {
    const response: WeatherDetails = yield call(
      weatherApi.getWeatherByLocationId,
      action.payload
    );
    const consolidatedWeather:Weather[] = response.consolidated_weather;
    const { time, sun_rise, sun_set, timezone_name, title, timezone, location_type } = response;
    yield put(weatherActions.setConsolidatedWeather(consolidatedWeather));
    yield put(
      weatherActions.setGeneralWeatherInfo({
        time,
        sun_rise,
        sun_set,
        timezone_name,
        title,
        timezone,
        location_type
      })
    );
    yield put(weatherActions.getWeatherByLocationIdSuccess());
  } catch (error) {
    toast.error(`${ERROR_MESSAGE.SEARCH_LOCATION_FAILED} ${error}`)
    yield put(weatherActions.getWeatherByLocationIdFailed());
  }
}

export default function* weatherSaga() {
  yield takeLatest(weatherActions.getWeatherByLocationId, getWeatherByLocationId);
}
