import { combineReducers } from "redux";
import todosReducer from "./reducers/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
