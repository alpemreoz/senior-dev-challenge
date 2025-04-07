import { Dispatch } from "react";
import { AnyAction } from "redux-saga";

export const handleDeleteTodo = (
  dispatch: Dispatch<AnyAction>,
  deleteTodo: (id: number) => AnyAction,
  id: number
) => {
  dispatch(deleteTodo(id));
};
