import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/postSlice";
import type { RootState } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);
  const loading = useSelector((state: RootState) => state.post.loading);

  return (
    <div style={{ padding: 20 }}>
      <h1>📦 Redux-Saga Example</h1>
      <button onClick={() => dispatch(fetchPosts())} disabled={loading}>
        {loading ? "Loading..." : "Load Posts"}
      </button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
