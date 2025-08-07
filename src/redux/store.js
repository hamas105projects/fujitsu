// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import publicDataReducer from "./publicDataSlice";
import tasksReducer from "./tasksSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    publicData: publicDataReducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
