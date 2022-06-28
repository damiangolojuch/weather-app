import { all, fork, put, takeEvery } from "redux-saga/effects";
import { ChangePageActionPayload, pageBaseSlice } from "~/pages/pageBaseSlice";
import pages, { PageType } from "~/pageConfigs";
import isServer from "~/utils/server/isServer";

function* pageChangeWorker(action: ChangePageActionPayload) {
  const pageName = action.payload.pageConfig.pageName as PageType;
  const loadActions = pages[pageName]?.loadActions || [];

  for (const action of loadActions) {
    yield put(action);
  }
}

function* pageChangeWatcher() {
  if (!isServer()) {
    // Disable on SSR, because server logic handles loadActions dispatch.
    yield takeEvery(pageBaseSlice.actions.changePage.type, pageChangeWorker);
  }
}

export default function* pageSaga() {
  yield all([fork(pageChangeWatcher)]);
}
