import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import {
  fetchCardsSuccess,
  fetchCardsFailure,
  fetchCards,
} from "../slices/cardSlice";
import { mockCardApi } from "@/api/cardApi";

function* handleFetchCards(): SagaIterator {
  try {
    const cards = yield call(mockCardApi.getAllCards);
    yield put(fetchCardsSuccess(cards));
  } catch (e) {
    yield put(fetchCardsFailure());
  }
}

export default function* cardSaga() {
  yield takeLatest(fetchCards, handleFetchCards);
}
