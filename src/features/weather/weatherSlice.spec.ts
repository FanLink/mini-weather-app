import {
  consolidatedWeatherListTest,
  generalWeatherInfoTest,
  newConsolidatedWeatherListTest,
  newGeneralWeatherInfoTest,
} from 'models';
import weatherReducer, {
  initialGeneralWeatherInfo,
  weatherActions,
  WeatherState,
} from './weatherSlice';

describe('Weather reducer', () => {
  const woeid: number = 123;
  const previousStateWithLoadingEqualFalse: WeatherState = {
    loading: false,
    consolidatedWeather: [] || consolidatedWeatherListTest,
    generalWeatherInfo: initialGeneralWeatherInfo || generalWeatherInfoTest,
  };
  const previousStateWithLoadingEqualTrue = {
    ...previousStateWithLoadingEqualFalse,
    loading: true,
  };
  it('Should handle initial state', () => {
    expect(
      weatherReducer(undefined, {
        type: 'unknown',
      })
    ).toEqual({
      loading: false,
      consolidatedWeather: [],
      generalWeatherInfo: initialGeneralWeatherInfo,
    });
  });
  it(' should handle get Weather ByLocation Id', () => {
    const actual = weatherReducer(
      previousStateWithLoadingEqualFalse,
      weatherActions.getWeatherByLocationId(woeid)
    );
    expect(actual.loading).toEqual(true);
  });
  it('should handle get Weather By LocationId Success', () => {
    const actual = weatherReducer(
      previousStateWithLoadingEqualTrue,
      weatherActions.getWeatherByLocationIdSuccess()
    );
    expect(actual.loading).toEqual(false);
  });
  it('should handle get Weather ByLocationId Failed', () => {
    const actual = weatherReducer(
      previousStateWithLoadingEqualTrue,
      weatherActions.getWeatherByLocationIdFailed()
    );
    expect(actual.loading).toEqual(false);
  });
  it('should handle set Consolidated Weather', () => {
    const actual = weatherReducer(
      previousStateWithLoadingEqualFalse,
      weatherActions.setConsolidatedWeather(newConsolidatedWeatherListTest)
    );
    expect(actual.consolidatedWeather).toEqual(newConsolidatedWeatherListTest);
  });
  it('should handle set General Weather Info', () => {
    const actual = weatherReducer(
      previousStateWithLoadingEqualFalse,
      weatherActions.setGeneralWeatherInfo(newGeneralWeatherInfoTest)
    );
    expect(actual.generalWeatherInfo).toEqual(newGeneralWeatherInfoTest);
  });
});
