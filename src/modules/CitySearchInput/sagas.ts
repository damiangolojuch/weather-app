import { all, call, fork, select, takeLatest } from "redux-saga/effects";
import { searchCity, SearchCityAction } from "./slice";
import { matchCity } from "~/modules/CitySearchInput/helpers";
import { selectAllCities } from "~/modules/WeatherLogic/selectors";
import { CityWeatherType } from "~/modules/WeatherLogic/constants";
import history from "~/history";

export function* searchCityWorker(action: SearchCityAction) {
  const { newCityName } = action.payload;
  if (!action.payload.newCityName) {
    return;
  }

  const cities: CityWeatherType[] = yield select(selectAllCities);
  const cityNames = cities.map((city) => city.city);
  const matchedCity: string = yield call(matchCity, newCityName, cityNames);

  yield call(history.push, `/${matchedCity || newCityName}`);
}

export function* searchCityWatcher() {
  yield takeLatest(searchCity.type, searchCityWorker);
}

export default function* searchCitySagas() {
  yield all([fork(searchCityWatcher)]);
}
