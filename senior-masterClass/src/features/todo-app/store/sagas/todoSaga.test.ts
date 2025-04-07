import { call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../actionTypes";
import { fetchTodosSaga } from "./todoSaga";
import { getOrFetchData } from "../../utils/getOrFetchData";

jest.mock("../../utils/getOrFetchData", () => ({
  getOrFetchData: jest.fn(),
}));

describe("fetchTodosSaga (generator test)", () => {
  it("should dispatch FETCH_TODOS_SUCCESS on success", () => {
    const mockTodos = [{ id: 1, title: "Test", completed: false }];
    const gen = fetchTodosSaga();

    // ✅ Match the exact call to getOrFetchData
    expect(gen.next().value).toEqual(
      call(getOrFetchData, "localTodos", expect.any(Function))
    );

    // Simulate API response
    const result = gen.next(mockTodos).value;

    // ✅ Then expect the put call
    expect(result).toEqual(put(actions.fetchTodosSuccess(mockTodos)));
  });

  it("should dispatch FETCH_TODOS_FAILURE on error", () => {
    const gen = fetchTodosSaga();

    // Step into the saga
    gen.next(); // skip call step

    // Now throw an error into the generator
    const result = gen.throw(new Error("Fail")).value;

    expect(result).toEqual(put(actions.fetchTodosFailure("Fail")));
  });
});
