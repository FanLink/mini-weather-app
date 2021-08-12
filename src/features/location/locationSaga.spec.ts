import weatherApi from 'api/weatherApi';
import { Location, location } from 'models';
import { runSaga, Saga } from 'redux-saga';
import { debounce } from 'redux-saga/effects';
import locationSaga, { handleSearchDebound } from './locationSaga';
import { locationActions } from './locationSlice';

describe('test locationSaga watcher and  handleSearchDebound', () => {
  let requestLocation: jest.SpyInstance<Promise<Location[]>, [arg: string]>;
  const genObject = locationSaga();
  it('should wait for debound requestLocation action and call handleSearchDebound', () => {
    const generator = genObject.next();
    expect(generator.value).toEqual(
      debounce(500, locationActions.getLocation.type, handleSearchDebound)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
  it('should call api and dispatch success action', async () => {
    requestLocation = jest
      .spyOn(weatherApi, 'locationSearch')
      .mockImplementation(() => Promise.resolve(location));
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      handleSearchDebound as Saga<any[]>,
      'test title'
    );

    expect(requestLocation).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([locationActions.getLocationSuccess(location)]);
    requestLocation.mockClear();
  });
  it('should call api and dispatch error action', async () => {
    requestLocation = jest
      .spyOn(weatherApi, 'locationSearch')
      .mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      handleSearchDebound as Saga<any[]>,
      'test title'
    );

    expect(requestLocation).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([locationActions.getLocationFailed()]);
    requestLocation.mockClear();
  });
});
