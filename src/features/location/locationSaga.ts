import { PayloadAction } from "@reduxjs/toolkit";
import weatherApi from "api/weatherApi";
import { ERROR_MESSAGE } from "constants/constants";
import {Location } from "models";
import { toast } from "react-toastify";
import { call, debounce, put } from "redux-saga/effects";
import { locationActions } from "./locationSlice";


function* handleSearchDebound (action: PayloadAction<string>){
  try {
    const response:Location[] = yield call(weatherApi.locationSearch, action.payload)
     yield put(locationActions.getLocationSuccess(response))
   } catch (error) {
     toast.error(`${ERROR_MESSAGE.SEARCH_LOCATION_FAILED} ${error.message}`)
     yield  put (locationActions.getLocationFailed())
   }
 
}

export default function* locationSaga(){
  yield debounce(500, locationActions.getLocation.type,  handleSearchDebound)
}