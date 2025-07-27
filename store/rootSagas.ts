import { all } from "redux-saga/effects";

import cardWatcherSaga from "./sagas/cardSagas";

export default function* rootSaga() {
  yield all([
    cardWatcherSaga(),
  ]);
}
