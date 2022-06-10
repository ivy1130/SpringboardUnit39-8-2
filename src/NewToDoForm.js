import React, { useState } from "react";

const NewToDoForm = ({ addToDo }) => {
  const INITIAL_STATE = {
    task: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((formData) => ({
      ...formData, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addToDo({...formData})
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        type="text"
        name="task"
        placeholder="task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Add Task!</button>
    </form>
  )
}

export default NewToDoForm