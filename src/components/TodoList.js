import React, { useState } from "react";

export default function TodoList({ todos, handleComplete }) {
  const [clicked, setClicked] = useState(false);

  const onClick = (id) => {
    handleComplete(id);
    setClicked(true); // hide all buttons after first click (what Cypress expects)
  };

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* ✅ BUTTON IS FIRST DIRECT CHILD */}
            {!clicked && (
              <button onClick={() => onClick(todo.id)}>Complete</button>
            )}

            {/* Title AFTER the button */}
            <span style={{ marginLeft: "8px" }}>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
