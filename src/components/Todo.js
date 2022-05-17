import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        if (!todo) {
            alert("Enter text for your task...")
            return
        }
        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        }

        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

    const toggleComplete = (id) => {
        const newArray = [...todos].map(todo =>{
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodos(newArray)
    }

    const deleteTodo = (id) => {
        const newArray = [...todos].filter(todo => todo.id !== id)
        setTodos(newArray)
    } 
    
    return (
        <div>
            <form className='todo-input' onSubmit={handleSubmit}>
                <input className='todo-inputbox' placeholder='add a task...' type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
                <button className='submitBtn' type="submit">➕</button>
            </form>
            <div className="task-container">
            {todos.map((todo) => 
            <div className={`bullet ${todo.completed ? "todoChecked" : ''}`} key={todo.id}>{todo.text}
            <div className="buttons">
            <input className='checkbox' type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed}/>
            <button className='deleteBtn' onClick={() => deleteTodo(todo.id)}>❌</button>
            </div>
            </div>)}
            </div>
        </div>
    );
}

export default Todo
