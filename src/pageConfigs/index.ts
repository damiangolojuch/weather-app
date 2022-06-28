import HomePageConfig from "./HomePageConfig";
import CityPageConfig from "./CityPageConfig";
import CityNotFoundPageConfig from "~/pageConfigs/CityNotFoundPageConfig";

const pages = {
  HomePage: HomePageConfig,
  CityNotFoundPage: CityNotFoundPageConfig,
  CityPage: CityPageConfig,
} as const;

export type PageType = keyof typeof pages;

export default pages;
