import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchTasksSaga() {
  yield put({ type: "SET_LOADING", payload: true });
  try {
    const response = yield call(() => axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"));
    const tasks = response.data.map((t) => ({
      title: t.title,
      completed: t.completed,
      category: "default",
    }));
    yield put({ type: "SET_TASKS", payload: tasks });
  } catch (e) {
    console.error(e);
  }
  yield put({ type: "SET_LOADING", payload: false });
}

export default function* rootSaga() {
  yield takeEvery("FETCH_TASKS", fetchTasksSaga);
}
