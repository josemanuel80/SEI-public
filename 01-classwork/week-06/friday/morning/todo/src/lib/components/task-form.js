import React from 'react';

const TaskForm = ({ handleSubmit, handleChange, task }) => {
  return (
    <form action="/" method="POST" onSubmit={handleSubmit}>
      <label htmlFor="tarea">Tarea</label>
      <input
        type="text"
        id="tarea"
        name="tarea"
        placeholder="Escribe tu tarea"
        onChange={handleChange}
        value={task}
      />
      <button type="submit">Enter</button>
    </form>
  );
};

export default TaskForm;
