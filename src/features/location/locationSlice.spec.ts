import { newLocation, previousStateWithLoadingFalse, previousStateWithLoadingTrue } from 'models';
import locationReducer, { locationActions } from './locationSlice';

describe('location reducer', () => {
  it('should handle initial state', () => {
    expect(
      locationReducer(undefined, {
        type: 'unknown',
      })
    ).toEqual({
      list: [],
      loading: false,
    });
  });
  it('should handle action getLocation', () => {
    const actual = locationReducer(
      previousStateWithLoadingFalse,
      locationActions.getLocation('Use Redux')
    );
    expect(actual.loading).toEqual(true);
  });
  it('should handle action getLocationSuccess', () => {
    const actual = locationReducer(
      previousStateWithLoadingTrue,
      locationActions.getLocationSuccess(newLocation)
    );
    expect(actual.list).toEqual(newLocation);
    expect(actual.loading).toEqual(false);
  });
  it('should handle action getLocationFailed', () => {
    const actual = locationReducer(
      previousStateWithLoadingTrue,
      locationActions.getLocationFailed()
    );
    expect(actual.loading).toEqual(false);
  });
  it('should handle action resetLocationList', () => {
    const actual = locationReducer(
      previousStateWithLoadingFalse,
      locationActions.resetLocationList()
    );
    expect(actual.list).toEqual([]);
  });
});
