import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from "react-icons/fa";
import Particals from "./Particals"



const serializeTodo = () => {
    let todoData = localStorage.getItem("todos");
    return todoData ? JSON.parse(todoData) : [];
}


const Todo = () => {
    const [todos, setTodos] = useState(serializeTodo());
    const [todo, setTodo] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])



    const handleChange = (id) => {
        let updatedTodos = todos.map((todo) => todo.id == id ? { ...todo, checked: !todo.checked } : todo)
        setTodos(updatedTodos)

    }

    const handleDelete = (id) => {
        let updatedTodos = todos.filter((todo) => todo.id != id)
        setTodos(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }

    const addTodo = () => {
        let todoData = {}
        if (todo) {
            todoData = { name: todo, checked: false, id: uuidv4() };
            setTodos([...todos, todoData]);
            setTodo("");
            localStorage.setItem("todos", JSON.stringify(todoData))
        } else {
            toast.error("Todo data is missing.")
        }

    }

    const handleKey= (e)=>{
        if(e.key == "Enter"){
            addTodo()
        }
    }

    return (
        <div className='todo-body'><div className='container '>
         
                <input type='text' className='form-group form-control m-3 col-6 input input-group' onKeyPress={(e)=>handleKey(e)} value={todo} onChange={(e) => setTodo(e.target.value)}></input>
                <button type='button' className='btn btn-secondary m-1 col-1 add' onClick={() => addTodo()}>Add</button>
   
            <ToastContainer></ToastContainer>
        </div>
            <div className='container'>
                {todos.length ? <ul className="list-group">
                    {todos.map((todo, index) => <div key={index} className='row from-check'>

                        <li key={index} className="list-group-item col-8 "> <input className='col-2  form-check-input m-2' onChange={(() => handleChange(todo.id))} type='checkbox' checked={todo.checked}></input>
                            <span className={todo.checked ? 'text-decoration-line-through' : ""} >{todo.name}</span>
                        </li>
                        <FaTrash onClick={() => handleDelete(todo.id)} className='col-2 deleteIcon' />
                    </div>)}
                </ul> : <p>No items in todo.</p>}
            </div>
        </div>
    )
}

export default Todo