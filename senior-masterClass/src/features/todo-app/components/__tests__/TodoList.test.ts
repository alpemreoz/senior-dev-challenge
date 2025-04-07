import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TodoList from "../TodoList";
import rootReducer from "../../store/rootReducer";

describe("TodoList component", () => {
  it("renders todos from Redux store", () => {
    const initialState = {
      todos: {
        todos: [
          { id: 1, title: "Learn Redux", completed: false },
          { id: 2, title: "Write tests", completed: true },
        ],
        loading: false,
        error: null,
      },
    };

    const store = createStore(rootReducer, initialState);

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByText("Learn Redux")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });
});
