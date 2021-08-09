import { LocationState } from 'features/location/locationSlice';
import { Location } from './weather';

export const location: Location[] = [
  {
    title: 'test title',
    woeid: 1234,
    location_type: 'test location type',
    latt_long: 'test latt long',
  },
];
export const newLocation: Location[] = [
  {
    title: 'new test title',
    woeid: 5678,
    location_type: 'new test location type',
    latt_long: 'new test latt long',
  },
];
export const previousStateWithLoadingFalse: LocationState = {
  loading: false,
  list: location || []
};
export const previousStateWithLoadingTrue: LocationState = {
  loading: true,
  list: location || []
};
