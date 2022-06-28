import { FC } from "react";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
  Location,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import pageConfigs from "~/pageConfigs";
import getPageComponent from "~/utils/page/getPageComponent";
import history from "./history";

const pageList = Object.values(pageConfigs).map((pageConfig) => ({
  ...pageConfig,
  component: getPageComponent(pageConfig),
}));

const RoutesComponent = () => (
  <Routes>
    {pageList.length > 0 &&
      pageList.map((pageConfig) => (
        <Route
          key={pageConfig.pageName}
          path={pageConfig.path}
          element={<pageConfig.component />}
        />
      ))}
  </Routes>
);

interface AppProps {
  staticLocation?: Partial<Location>;
}

export const App: FC<AppProps> = ({ staticLocation }) => {
  if (staticLocation) {
    return (
      <StaticRouter location={staticLocation}>
        <RoutesComponent />
      </StaticRouter>
    );
  }

  return (
    <HistoryRouter history={history}>
      <RoutesComponent />
    </HistoryRouter>
  );
};
