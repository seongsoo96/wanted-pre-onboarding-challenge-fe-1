import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:8080/todos");

    setTodos(result);
  }, []);
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
}
