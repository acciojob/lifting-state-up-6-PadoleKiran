import React from "react"
export default function TodoList({todos, handleComplete}){
    return(
        <div>
            <h2>Todo List</h2>

            {todos.map((todo) => (
                <div key={todo.id}>
                    <span style={{textDecoration: todo.compleated ? "line-through" : "none", marginRight: "10px"}}>{todo.title}</span>

                    {!todo.completed && (<button onClick={()=>{handleComplete(todo.id)}}>Complete</button>)}

                    {todo.completed && <span></span>}
                </div>
            ))}
        </div>
    )
}