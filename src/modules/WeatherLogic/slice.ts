import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityWeatherType } from "~/modules/WeatherLogic/constants";

export enum citiesFetchingStatus {
  notInitialized,
  inProgress,
  success,
  error,
}

export type GetCitiesAction = PayloadAction<{
  cities: CityWeatherType[];
}>;

type WeatherSliceState = {
  status: citiesFetchingStatus;
  cities: CityWeatherType[];
};

const initialState: WeatherSliceState = {
  status: citiesFetchingStatus.notInitialized,
  cities: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchCities: (state) => {
      state.status = citiesFetchingStatus.inProgress;
    },
    fetchCitiesError: (state) => {
      state.status = citiesFetchingStatus.error;
    },
    fetchCitiesSuccess: (state, action: GetCitiesAction) => {
      state.cities = action.payload.cities;
      state.status = citiesFetchingStatus.success;
    },
  },
});

export default weatherSlice.reducer;
