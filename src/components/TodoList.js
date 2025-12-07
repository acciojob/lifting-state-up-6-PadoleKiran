import React from "react";

export default function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <button
              onClick={() => handleComplete(todo.id)}
              style={{ display: todo.completed ? "none" : "inline" }}
            >
              Complete
            </button>

            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
