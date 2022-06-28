import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware, { END } from "redux-saga";
import reducers from "~/reducers";

const createStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware],
    preloadedState,
  });

  const runSaga = sagaMiddleware.run;
  const dispatchEndSagaAction = () => store.dispatch(END);

  return {
    store,
    runSaga,
    dispatchEndSagaAction,
  };
};

export type ApplicationState = ReturnType<
  ReturnType<typeof createStore>["store"]["getState"]
>;

export default createStore;
