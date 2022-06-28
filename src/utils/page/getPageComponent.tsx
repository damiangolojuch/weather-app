import { Suspense, ComponentType, useEffect } from "react";
import { PageBaseType } from "./page";
import { useDispatch } from "react-redux";
import { changePage } from "~/pages/pageBaseSlice";
import { useLocation, useParams } from "react-router-dom";
import isServer from "~/utils/server/isServer";

const getPageComponent = (pageConfig: PageBaseType): ComponentType => {
  const LazyComponent = pageConfig.component;

  return () => {
    const location = useLocation();
    const params = useParams();
    const isFirstRender = isServer() || !(window as any).__FIRST_RENDER_DONE;
    const dispatch = useDispatch();

    useEffect(() => {
      (window as any).__FIRST_RENDER_DONE = true;

      dispatch(
        changePage({
          pageConfig,
          isFirstRender,
          location,
          params,
        })
      );
    }, [dispatch, isFirstRender, location, params]);

    return (
      <Suspense>
        <LazyComponent />
      </Suspense>
    );
  };
};

export default getPageComponent;
