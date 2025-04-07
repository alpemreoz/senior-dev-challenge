import { Middleware } from "redux";
import * as types from "../actionTypes";
import { RootState } from "../rootReducer";

const LOCAL_STORAGE_KEY = "localTodos";

const actionsToSync = [types.ADD_TODO, types.TOGGLE_TODO, types.DELETE_TODO];

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action); // Let reducer run first

    if (actionsToSync.includes(action.type)) {
      const todos = store.getState().todos.todos;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }

    return result;
  };
