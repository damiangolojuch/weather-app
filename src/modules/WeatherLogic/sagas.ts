import fetch from "cross-fetch";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { weatherSlice } from "~/modules/WeatherLogic/slice";
import { ApiCityWeatherType } from "./constants";
import transformApiCityResponse from "~/modules/WeatherLogic/helpers/transformApiCityResponse";
import { getAllCitiesEndpoint } from "~/endpoints";

export function* fetchAllCitiesWorker() {
  const response: Response = yield call(fetch, getAllCitiesEndpoint());
  const cities: ApiCityWeatherType[] = yield call([response, "json"]);

  yield put(
    weatherSlice.actions.fetchCitiesSuccess({
      cities: transformApiCityResponse(cities),
    })
  );
}

export function* fetchAllCitiesWatcher() {
  yield takeLatest(weatherSlice.actions.fetchCities.type, fetchAllCitiesWorker);
}

export default function* weatherLogicSagas() {
  yield all([fork(fetchAllCitiesWatcher)]);
}
