import { all, fork } from "redux-saga/effects";
import todoSaga from "./sagas/todoSaga";

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
