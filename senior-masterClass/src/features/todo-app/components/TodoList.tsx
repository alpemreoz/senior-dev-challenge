import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { fetchTodosRequest, toggleTodo, deleteTodo } from "../store/actions";
import { handleDeleteTodo } from "../utils/deleteTodo";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  // const handleDeleteTodo = (id: number) => {
  //   dispatch(deleteTodo(id));
  // };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {todo.title}
          <button
            onClick={() => handleDeleteTodo(dispatch, deleteTodo, todo.id)}
            style={{ marginLeft: 10 }}
          >
            Delete To-Do
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
