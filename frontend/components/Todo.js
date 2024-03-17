import React from 'react'

export default function Todo ({todo,toggleTodo}) {
 
    return (
      <div style={{display:'flex', alignItems:'center'}}>
        <span style={{textDocoration: todo.completed ?'line-through' : 'none'}}
           onClick={() => toggleTodo(todo.id)}>
              {todo.task}
         </span>

        <span style={{cursor:'pointer', marginRight:'8px',fontSize:'20px',color: todo.completed ? 'black' : 'transparent',}}
        onClick={() => toggleTodo(todo.id)}>

            ✔
        </span>
      
      
      </div>
    );
  }

