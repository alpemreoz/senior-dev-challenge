import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleToDoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <form onSubmit={handleToDoSubmit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Add a To-Do"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodo;
