import reducer from "./todosReducer";
import * as types from "../actionTypes";

describe("todosReducer", () => {
  it(" should return initain state", () => {
    expect(reducer(undefined, { type: "UNKNOWN" })).toEqual({
      todos: [],
      loading: false,
      error: null,
    });
  });

  it("adds a new todo when ADD_TODO is dispatched", () => {
    const action = {
      type: types.ADD_TODO,
      payload: { title: "write more tests" },
    };

    const state = reducer(undefined, action);

    expect(state.todos.length).toBe(1);
    expect(state.todos[0].title).toBe("write more tests");
    expect(state.todos[0].completed).toBe(false);
  });

  it("toggles completed status of a todo", () => {
    const initialState = {
      todos: [{ id: 1, title: "Do stuff", completed: false }],
      loading: false,
      error: null,
    };

    const action = {
      type: types.TOGGLE_TODO,
      payload: { id: 1 },
    };

    const state = reducer(initialState, action);

    expect(state.todos[0].completed).toBe(true);
  });

  it("deletes a todo by id", () => {
    const initialState = {
      todos: [
        { id: 1, title: "One", completed: false },
        { id: 2, title: "Two", completed: false },
      ],
      loading: false,
      error: null,
    };

    const action = {
      type: types.DELETE_TODO,
      payload: { id: 1 },
    };

    const state = reducer(initialState, action);

    expect(state.todos.length).toBe(1);
    expect(state.todos[0].id).toBe(2);
  });
});
