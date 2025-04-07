import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/postSlice";
import type { RootState } from "./store";
import TodoList from "./features/todo-app/components/TodoList";
import AddTodo from "./features/todo-app/components/AddTodo";

export default function App() {
  // const dispatch = useDispatch();
  // const posts = useSelector((state: RootState) => state.post.posts);
  // const loading = useSelector((state: RootState) => state.post.loading);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ padding: 20 }}>
        <h1>📝 Todo App with Redux-Saga</h1>
        <TodoList />
        <AddTodo />
      </div>
    </div>
  );
}
