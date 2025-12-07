import React, { useState } from "react";

export default function TodoList({ todos, handleComplete }) {

  const [clicked, setClicked] = useState(false);

  function handleClick(id) {
    handleComplete(id);
    setClicked(true); // hide all buttons AFTER click
  }

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}

            {!clicked && (
              <button onClick={() => handleClick(todo.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
