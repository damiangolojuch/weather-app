import { all, fork } from "redux-saga/effects";
import pageSaga from "~/pages/pageBaseSagas";
import searchCitySagas from "~/modules/CitySearchInput/sagas";
import weatherLogicSagas from "~/modules/WeatherLogic/sagas";

function* rootSaga() {
  yield all([fork(pageSaga), fork(searchCitySagas), fork(weatherLogicSagas)]);
}

export default rootSaga;
