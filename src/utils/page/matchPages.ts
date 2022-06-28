import { Location, matchPath } from "react-router-dom";
import { PageBaseType } from "./page";

const matchPages = (
  pageConfigs: Record<string, PageBaseType>,
  currentRoute: Partial<Location>
) =>
  Object.values(pageConfigs).filter((page) =>
    matchPath(page.path, currentRoute.pathname || "")
  );

export default matchPages;
