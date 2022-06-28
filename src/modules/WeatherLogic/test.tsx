import weatherLogicSagas, {
  fetchAllCitiesWatcher,
  fetchAllCitiesWorker,
} from "~/modules/WeatherLogic/sagas";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { weatherSlice } from "~/modules/WeatherLogic/slice";
import fetch from "cross-fetch";
import { getAllCitiesEndpoint } from "~/endpoints";
import transformApiCityResponse from "~/modules/WeatherLogic/helpers/transformApiCityResponse";
import { ApiCityWeatherType } from "~/modules/WeatherLogic/constants";

describe("sagas", () => {
  test("weatherLogicSagas", () => {
    const saga = weatherLogicSagas();

    expect(saga.next().value).toEqual(all([fork(fetchAllCitiesWatcher)]));

    expect(saga.next().done).toBeTruthy();
  });

  test("fetchAllCitiesWatcher", () => {
    const saga = fetchAllCitiesWatcher();

    expect(saga.next().value).toEqual(
      takeLatest(weatherSlice.actions.fetchCities.type, fetchAllCitiesWorker)
    );

    expect(saga.next().done).toBeTruthy();
  });

  test("fetchAllCitiesWorker", () => {
    const saga = fetchAllCitiesWorker();
    const response = { json: jest.fn() } as any;
    const cities: ApiCityWeatherType[] = [
      {
        id_stacji: "123",
        stacja: "Kraków",
        suma_opadu: "1",
        temperatura: "2",
        cisnienie: "3",
        wilgotnosc_wzgledna: "4",
        predkosc_wiatru: "5",
        data_pomiaru: "12/12/12",
        godzina_pomiaru: "13:00",
        kierunek_wiatru: "",
      },
    ];

    expect(saga.next().value).toEqual(call(fetch, getAllCitiesEndpoint()));

    expect(saga.next(response).value).toEqual(call([response, "json"]));

    expect(saga.next(cities as any).value).toEqual(
      put(
        weatherSlice.actions.fetchCitiesSuccess({
          cities: transformApiCityResponse(cities),
        })
      )
    );

    expect(saga.next().done).toBeTruthy();
  });
});
