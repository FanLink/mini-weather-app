import locationSaga from "features/location/locationSaga";
import weatherSaga from "features/weather/weatherSaga";
import {all} from "redux-saga/effects";
export default function* rootSaga(){
  yield all([
   locationSaga(),
   weatherSaga()
  ])
}