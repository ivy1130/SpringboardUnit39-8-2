import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import ToDo from "./ToDo"
import NewToDoForm from "./NewToDoForm";

const ToDoList = () => {
  const INITIAL_STATE=[]

  const [toDos, setToDos] = useState(INITIAL_STATE)
  const addToDo = (newToDo) => {
    setToDos(toDos => [...toDos, {...newToDo, id: uuid()}])
  }

  const removeToDo = (id) => {
    setToDos(toDos.filter(toDo => toDo.id !== id))
  }

  return (
    <div className="ToDoList">
      <h3>To Do List</h3>
      <NewToDoForm addToDo={addToDo} />
      <div>
        {toDos.map(({ task, id }) => 
          <ToDo task={task} id={id} key={id} removeToDo={removeToDo}/>
        )}
      </div>
    </div>
  )

}

export default ToDoList