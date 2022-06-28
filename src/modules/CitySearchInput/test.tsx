import CitySearchInput from "~/modules/CitySearchInput/index";
import { fireEvent, render, screen } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { searchCity } from "~/modules/CitySearchInput/slice";
import searchCitySagas, {
  searchCityWatcher,
  searchCityWorker,
} from "~/modules/CitySearchInput/sagas";
import { all, call, fork, select, takeLatest } from "redux-saga/effects";
import { selectAllCities } from "~/modules/WeatherLogic/selectors";
import { matchCity } from "~/modules/CitySearchInput/helpers";
import history from "~/history";
import { CityWeatherType } from "~/modules/WeatherLogic/constants";

jest.mock("react-redux", () => {
  const dispatch = jest.fn();

  return {
    __esModule: true,
    useDispatch: () => dispatch,
    useSelector: jest.fn(),
  };
});

describe("<CitySearchInput />", () => {
  const setup = () => {
    return render(<CitySearchInput />);
  };

  it("should dispatch searchCity action with new city name on input value change", () => {
    const { container } = setup();

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "some city" } });
    fireEvent.click(button);

    expect(input).toHaveValue("some city");
    expect(useDispatch()).toHaveBeenCalledWith(
      searchCity({
        newCityName: "some city",
        previousCityName: undefined,
      } as any)
    );
  });
});

describe("sagas", () => {
  test("searchCitySagas", () => {
    const saga = searchCitySagas();

    expect(saga.next().value).toEqual(all([fork(searchCityWatcher)]));

    expect(saga.next().done).toBeTruthy();
  });

  test("searchCityWatcher", () => {
    const saga = searchCityWatcher();

    expect(saga.next().value).toEqual(
      takeLatest(searchCity.type, searchCityWorker)
    );

    expect(saga.next().done).toBeTruthy();
  });

  describe("searchCityWorker", () => {
    it("should do nothing if passed newCityName is falsy", () => {
      const saga = searchCityWorker(
        searchCity({ newCityName: "", previousCityName: "" })
      );

      expect(saga.next().done).toBeTruthy();
    });

    test("saga flow with matched city", () => {
      const saga = searchCityWorker(
        searchCity({ newCityName: "Kraków", previousCityName: "" })
      );

      const cities: CityWeatherType[] = [
        {
          city: "Kraków",
          humidity: 1,
          pressure: 1,
          temperature: 1,
          windSpeed: 1,
          clouds: 1,
          id: "1",
        },
      ];

      expect(saga.next().value).toEqual(select(selectAllCities));

      expect(saga.next(cities as any).value).toEqual(
        call(matchCity, "Kraków", ["Kraków"])
      );

      expect(saga.next("Kraków" as any).value).toEqual(
        call(history.push, `/Kraków`)
      );

      expect(saga.next().done).toBeTruthy();
    });

    test("saga flow without matched city", () => {
      const saga = searchCityWorker(
        searchCity({ newCityName: "some city", previousCityName: "" })
      );

      const cities: CityWeatherType[] = [
        {
          city: "Kraków",
          humidity: 1,
          pressure: 1,
          temperature: 1,
          windSpeed: 1,
          clouds: 1,
          id: "1",
        },
      ];

      expect(saga.next().value).toEqual(select(selectAllCities));

      expect(saga.next(cities as any).value).toEqual(
        call(matchCity, "some city", ["Kraków"])
      );

      expect(saga.next().value).toEqual(call(history.push, `/some city`));

      expect(saga.next().done).toBeTruthy();
    });
  });
});
