import transformApiCityResponse from "~/modules/WeatherLogic/helpers/transformApiCityResponse";
import {
  ApiCityWeatherType,
  CityWeatherType,
} from "~/modules/WeatherLogic/constants";

describe("transformApiCityResponse", () => {
  it("should transform api response into new format", () => {
    const apiResponse: ApiCityWeatherType[] = [
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
    const expected: CityWeatherType[] = [
      {
        clouds: 1,
        windSpeed: 5,
        temperature: 2,
        pressure: 3,
        humidity: 4,
        city: "Kraków",
        id: "123",
      },
    ];
    expect(transformApiCityResponse(apiResponse)).toEqual(expected);
  });
});
