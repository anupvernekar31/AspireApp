import { configureStore } from "@reduxjs/toolkit";
// import  createSagaMiddleware  from "redux-saga";
import cardReducer from "./slices/cardSlice";
import rootSaga from "./rootSagas";
import * as ReduxSaga from 'redux-saga';


const createSagaMiddleware = require('redux-saga').default;
const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
