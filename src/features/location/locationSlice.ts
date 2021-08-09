import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import {Location } from "models";

export interface LocationState{
  loading: boolean;
  list: Location[];
}
const initialState: LocationState  = {
  loading: false,
  list : []
}

const locationSlice = createSlice({
  name:'location',
  initialState,
  reducers: {
    getLocation(state, action: PayloadAction<string>){
      state.loading = true;
    },
    getLocationSuccess(state, action: PayloadAction<Location[]>){
      state.list = action.payload;
      state.loading = false;
    },
    getLocationFailed(state){
      state.loading = false;
    },
    resetLocationList(state){
      state.list = [];
    }
  }
})

// Actions
export const locationActions = locationSlice.actions;
//selectors
  export const selectLocationLoading = (state: RootState) => state.location.loading;
  export const selectLocationList = (state: RootState) => state.location.list;
  export const selectLocationOptions = createSelector(selectLocationList, (locationList) =>
  locationList.map((location) => ({
    label: location.title,
    value: location.woeid
  }))
);
// reducer
const locationReducer = locationSlice.reducer;
export default locationReducer;