import React from "react";

const ToDo = ({ task, id, removeToDo}) => {
  const handleRemove = () => {
    removeToDo(id)
  }

  return (
  <div>
    {task}
    <button onClick={handleRemove}>x</button>
  </div>
  )
}

export default ToDo