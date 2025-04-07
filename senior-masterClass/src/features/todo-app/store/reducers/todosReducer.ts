import * as types from "../actionTypes";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

export default function todosReducer(
  state = initialState,
  action: any
): TodosState {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case types.FETCH_TODOS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.todos,
      };
    case types.FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
