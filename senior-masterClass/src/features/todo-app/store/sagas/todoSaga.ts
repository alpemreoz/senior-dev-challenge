import { call, put, take, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../actionTypes";
import { getOrFetchData } from "../../utils/getOrFetchData";

const fetchTodosFromAPI = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
};

export function* fetchTodosSaga() {
  try {
    const todos = yield call(getOrFetchData, "localTodos", fetchTodosFromAPI);
    yield put(actions.fetchTodosSuccess(todos));
  } catch (error: any) {
    yield put(actions.fetchTodosFailure(error.message));
  }
}

export default function* todoSaga() {
  yield takeLatest(types.FETCH_TODOS_REQUEST, fetchTodosSaga);
}
