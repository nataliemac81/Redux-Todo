import React, { Component } from "react"


const Todo = ({task, toggleTodo, id}) => (
    <li>
    {task}
    <button onClick={toggleTodo} style={{textDecoration: task.id ? 'line-through' : 'none'}}> x </button>
    </li>
)
    

export default Todo