import { PageBaseType } from "~/utils/page/page";
import { lazy } from "react";

const CityNotFoundPageConfig: PageBaseType = {
  pageName: "CityNotFoundPage",
  path: "/not-found/",
  component: lazy(() => import("../pages/CityNotFoundPage/CityNotFoundPage")),
  loadActions: [],
};

export default CityNotFoundPageConfig;
