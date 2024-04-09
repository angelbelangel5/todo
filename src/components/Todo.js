import React, { useState } from 'react';
import styles from './Todo.css';

function Todo() {
    const [name, setName] = useState("");
    const [todo, setTodo] = useState([]);
    
    function handleChange(event) {
        setName(event.target.value);
    }

    const addTodo = () => {
        setTodo(prevTodo => [...prevTodo, name]);
        setName(""); 
    }

    return (
        <div>
           <div class="inputAndButton">
           <input 
                type="text"
                name="name"
                onChange={handleChange}
                value={name} 
                class="inputStyles"
            />
            <button onClick={addTodo} class="addButton">ADD</button>
            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
           </div>
          
        </div>
    );
}

export default Todo;
