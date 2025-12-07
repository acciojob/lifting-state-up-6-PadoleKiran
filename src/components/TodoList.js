import React from "react";

export default function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              // style={{
              //   textDecoration: todo.completed ? "line-through" : "none",
              //   marginRight: "10px",
              // }}
            >
              {todo.title}
            </span>

            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
