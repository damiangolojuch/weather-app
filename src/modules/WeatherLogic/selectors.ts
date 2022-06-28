import { ApplicationState } from "~/store";
import { CityWeatherType } from "~/modules/WeatherLogic/constants";
import { citiesFetchingStatus } from "~/modules/WeatherLogic/slice";

export const selectAllCities = (state: ApplicationState) =>
  state.weather.cities;

export const selectCity =
  (cityName: string) =>
  (state: ApplicationState): CityWeatherType | undefined =>
    Object.values<CityWeatherType>(selectAllCities(state)).find(
      (city) => city.city === cityName
    );

export const selectCitiesFetchStatus = (state: ApplicationState) =>
  state.weather.status;

export const selectIsCitiesLoading = (state: ApplicationState) => {
  const status = selectCitiesFetchStatus(state);

  return (
    citiesFetchingStatus.notInitialized === status ||
    citiesFetchingStatus.inProgress === status
  );
};
