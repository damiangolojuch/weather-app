import { PageBaseType } from "~/utils/page/page";
import { lazy } from "react";
import { weatherSlice } from "~/modules/WeatherLogic/slice";
import { clearSearch } from "~/modules/CitySearchInput/slice";

const HomePageConfig: PageBaseType = {
  pageName: "HomePage",
  path: "/",
  component: lazy(() => import("../pages/HomePage/HomePage")),
  loadActions: [weatherSlice.actions.fetchCities(), clearSearch()],
};

export default HomePageConfig;
