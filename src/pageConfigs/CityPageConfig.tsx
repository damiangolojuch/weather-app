import { PageBaseType } from "~/utils/page/page";
import { lazy } from "react";
import { weatherSlice } from "~/modules/WeatherLogic/slice";

const CityPageConfig: PageBaseType = {
  pageName: "CityPage",
  path: "/:city/",
  component: lazy(() => import("../pages/CityPage/CityPage")),
  loadActions: [weatherSlice.actions.fetchCities()],
};

export default CityPageConfig;
