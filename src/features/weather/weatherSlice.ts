import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Weather } from 'models';

export interface GeneralWeatherInfo {
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  title: string;
  timezone: string;
  location_type: string;
}

export interface WeatherState {
  loading: boolean;
  consolidatedWeather: Weather[];
  generalWeatherInfo: GeneralWeatherInfo;
}
export const initialGeneralWeatherInfo: GeneralWeatherInfo = {
  time: '',
  sun_rise: '',
  sun_set: '',
  timezone_name: '',
  title: '',
  timezone: '',
  location_type: '',
};

const initialState: WeatherState = {
  loading: false,
  consolidatedWeather: [],
  generalWeatherInfo: initialGeneralWeatherInfo,
};
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherByLocationId(state, action: PayloadAction<number>) {
      state.loading = true;
    },
    getWeatherByLocationIdSuccess(state) {
      state.loading = false;
    },
    getWeatherByLocationIdFailed(state) {
      state.loading = false;
    },
    setConsolidatedWeather(state, action: PayloadAction<Weather[]>) {
      state.consolidatedWeather = action.payload;
    },
    setGeneralWeatherInfo(state, action: PayloadAction<GeneralWeatherInfo>) {
      state.generalWeatherInfo = action.payload;
    }
  },
});

// Actions
export const weatherActions = weatherSlice.actions;

//Selectors
export const selectWeatherLoading = (state: RootState) => state.weather.loading;
export const selectWeatherSixDaysInfo = (state: RootState) => state.weather.consolidatedWeather;
export const selectGeneralWeatherInfo = (state: RootState) => state.weather.generalWeatherInfo;

//Reducer
const weatherReducer = weatherSlice.reducer;
export default weatherReducer;
