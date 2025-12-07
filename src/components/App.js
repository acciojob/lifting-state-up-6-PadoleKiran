
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  let [todos,setTodos] = useState(
    [
      {id: 1, title: "Learn React", completed: false},
      {id: 2, title: "Practice JavaScript", completed: false},
      {id: 3, title: "Build a project", completed: false},
    ]
  );

  function handleComplete(id){
    // const updatedTodos = todos.map((todo)=>(
    //   todo.id === id ? {...todo, completed: true} : todo
    // ))
    // setTodos(updatedTodos);

    setTodos((prevTodo) => 
      prevTodo.map((todo)=>
        todo.id === id ? {...todo, completed: true} : todo
      )
    )
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        {/* <h1>Test</h1> */}
        <h1>Todo App</h1>
        <TodoList todos={todos} handleComplete={handleComplete} />

    </div>
  )
}

export default App
