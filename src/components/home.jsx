import React, { useState } from "react";
const Home = () => {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        setTodos([...todos, task]);
        setTask("");
    };


    return (
    <section>
        
        <h1 className="text-blue-900 text-5xl flex justify-center">To Do App</h1>
        
        <section className="flex justify-center m-7 ">
            <form id="add-task-form" autocomplete="off" onSubmit={handleSubmit}>
                
                <input id="todo-input" type="text" placeholder="Add a new task" 
                onChange={(e) => setTask(e.target.value)}  
                className="bg-blue-400"/>

                <button id="add-btn" type="submit" className="bg-amber-400">Add</button>
            </form>
            
            <ul className="mt-4 list-disc list-inside space-y-1">
                {todos.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </section>
        
        
    </section>
    
  );

  };

  
export default Home;
