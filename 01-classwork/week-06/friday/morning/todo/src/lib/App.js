import React, { useState } from 'react';
import TodoListItem from './components/task.js';
import TaskForm from './components/task-form.js';

const App = () => {
  // Tuple
  const [task, setTask] = useState('');
  const [tareas, setTareas] = useState([
    'Aprender la diferecia entre componentes tipo clase versus tipo funcion',
    'Ir al mercado',
    'Cada vez que tenga problemas con componentes tipo funcion echarle la culpa a Mariano',
  ]);

  const handleChange = (event) => {
    setTask(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevaTareas = tareas.concat(task);
    setTareas(nuevaTareas);
    setTask('');
  };

  const deleteTask = (index) =>
    tareas.filter((task, i) => {
      if (index !== i) {
        return task;
      }
    });

  const handleClickDeleteButton = (index) => {
    const nuevasTareas = deleteTask(index);
    setTareas(nuevasTareas);
  };

  const handleClickUpdateButton = (tarea, index) => {
    const nuevasTareas = deleteTask(index);
    setTareas(nuevasTareas);
    setTask(tarea);
  };

  return (
    <>
      <h1>To do list</h1>

      <TaskForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        task={task}
      />

      <ul>
        {tareas.map((tarea, i) => {
          return (
            <TodoListItem
              key={i}
              index={i}
              tarea={tarea}
              handleClickDeleteButton={handleClickDeleteButton}
              handleClickUpdateButton={handleClickUpdateButton}
            />
          );
        })}
      </ul>
    </>
  );
};

class Eduardo extends React.Component {
  state = {
    header: 'texto',
    ariel: 'ariel',
    task: '',
    tareas: [
      'Apender la diferecia entre componentes tipo clase versus tipo funcion',
      'Ir al mercado',
      'Cada vez que tenga problemas con componentes tipo funcion echarle la culpa a Mariano',
    ],
  };

  handleClick(event) {
    console.log(event);
  }

  render() {
    return <p onClick={this.handleClick}>Eduardo</p>;
  }
}

export default App;
