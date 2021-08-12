import { runSaga, Saga } from 'redux-saga';
import weatherApi from 'api/weatherApi';
import { weatherActions } from './weatherSlice';
import weatherSaga, { getWeatherByLocationId } from './weatherSaga';
import { WeatherDetails, WeatherDetailsTest } from 'models';
import { takeLatest } from 'redux-saga/effects';

describe('test weatherSaga watcher and  getWeatherByLocationId', () => {
  const woeid = 44418;
  let requestWeather: jest.SpyInstance<Promise<WeatherDetails>, [woeid: number]>;
  const genObject = weatherSaga();
  it('should wait for latest getWeatherByLocationId action and call getWeatherByLocationId', () => {
    const generator = genObject.next();
    expect(generator.value).toEqual(
      takeLatest(weatherActions.getWeatherByLocationId, getWeatherByLocationId)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
  it('should call api and dispatch success action', async () => {
    const dispatched: any[] = [];
    const { time, sun_rise, sun_set, timezone_name, title, timezone, location_type } =
      WeatherDetailsTest;
    requestWeather = jest
      .spyOn(weatherApi, 'getWeatherByLocationId')
      .mockImplementation(() => Promise.resolve(WeatherDetailsTest));
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getWeatherByLocationId as Saga<any[]>,
      woeid
    );

    expect(requestWeather).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(
      weatherActions.setConsolidatedWeather(WeatherDetailsTest.consolidated_weather)
    );
    expect(dispatched[1]).toEqual(
      weatherActions.setGeneralWeatherInfo({
        time,
        sun_rise,
        sun_set,
        timezone_name,
        title,
        timezone,
        location_type,
      })
    );
    expect(dispatched[2]).toEqual(weatherActions.getWeatherByLocationIdSuccess());
    requestWeather.mockClear();
  });
  it('should call api and dispatch error action', async () => {
    requestWeather = jest
      .spyOn(weatherApi, 'getWeatherByLocationId')
      .mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getWeatherByLocationId as Saga<any[]>,
      woeid
    );

    expect(requestWeather).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([weatherActions.getWeatherByLocationIdFailed()]);
    requestWeather.mockClear();
  });
});
