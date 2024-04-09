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



    const deleteTodo = (id) => {
        const updatedTodo = todo.filter((_, idx) => idx !== id);
        setTodo(updatedTodo);
    }
    
  
    const updateTodo=()=>{
        
    }
    return (
        <div class="mainContainer">
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
                
                {todo.map((item, id) => (
                    <>
                    <li key={id}>{item}</li>
                   <button onClick={()=>deleteTodo(id)}>DELETE</button>
                   <button onClick={()=>updateTodo(id)}>UPDATE</button>
                    </>
                ))}
                
            </ul>

           </div>
          
        </div>
    );
}

export default Todo;
