import {
  ApiCityWeatherType,
  CityWeatherType,
} from "~/modules/WeatherLogic/constants";

const transformApiCityResponse = (
  apiCities: ApiCityWeatherType[]
): CityWeatherType[] =>
  apiCities.map((apiCity) => ({
    id: apiCity.id_stacji,
    city: apiCity.stacja,
    windSpeed: +apiCity.predkosc_wiatru,
    humidity: +apiCity.wilgotnosc_wzgledna,
    pressure: +apiCity.cisnienie,
    temperature: +apiCity.temperatura,
    // API tego nie dostarcza, uproszczenie na potrzeby aplikacji
    clouds: +apiCity.suma_opadu,
  }));

export default transformApiCityResponse;
