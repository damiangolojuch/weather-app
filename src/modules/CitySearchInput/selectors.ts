import { ApplicationState } from "~/store";

export const selectCurrentCityName = (state: ApplicationState) =>
  state.searchCity.currentCityName;
