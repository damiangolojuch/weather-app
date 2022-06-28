import { App } from "App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import GlobalStyles from "styles/global";
import reportWebVitals from "./reportWebVitals";
import createStore from "./store";
import rootSaga from "~/sagas";

const { store, runSaga } = createStore((window as any).__APP_STATE || {});

runSaga(rootSaga);

ReactDOM.hydrate(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <GlobalStyles />
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
