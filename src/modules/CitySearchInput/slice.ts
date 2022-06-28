import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SearchCityAction = PayloadAction<{
  newCityName: string;
  previousCityName: string;
}>;

const citySearchSlice = createSlice({
  name: "citySearch",
  initialState: {
    currentCityName: "",
    previousCityName: "",
  },
  reducers: {
    searchCity: (state, action: SearchCityAction) => {
      state.currentCityName = action.payload.newCityName;
      state.previousCityName = action.payload.previousCityName;
    },
    clearSearch: (state) => {
      state.previousCityName = state.currentCityName;
      state.currentCityName = "";
    },
  },
});

export const { searchCity, clearSearch } = citySearchSlice.actions;

export default citySearchSlice.reducer;
