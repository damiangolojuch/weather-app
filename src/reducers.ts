import PageReducer from "~/pages/pageBaseSlice";
import SearchCityReducer from "~/modules/CitySearchInput/slice";
import WeatherReducer from "~/modules/WeatherLogic/slice";

const reducers = {
  page: PageReducer,
  searchCity: SearchCityReducer,
  weather: WeatherReducer,
};

export default reducers;
