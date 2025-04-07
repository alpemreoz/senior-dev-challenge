import * as types from "./actionTypes";
import type { Todo } from "./reducers/todosReducer";

export const addTodo = (title: string) => ({
  type: types.ADD_TODO,
  payload: { title },
});

export const toggleTodo = (id: number) => ({
  type: types.TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id: number) => ({
  type: types.DELETE_TODO,
  payload: { id },
});

export const fetchTodosRequest = () => ({
  type: types.FETCH_TODOS_REQUEST,
});

export const fetchTodosSuccess = (todos: Todo[]) => ({
  type: types.FETCH_TODOS_SUCCESS,
  payload: { todos },
});

export const fetchTodosFailure = (error: string) => ({
  type: types.FETCH_TODOS_FAILURE,
  payload: { error },
});
