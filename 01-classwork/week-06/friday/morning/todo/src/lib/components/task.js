import React from 'react';

const TodoListItem = ({
  index,
  tarea,
  handleClickDeleteButton,
  handleClickUpdateButton,
}) => {
  return (
    <li key={index}>
      {tarea}
      <button onClick={() => handleClickDeleteButton(index)}>delete</button>
      <button onClick={() => handleClickUpdateButton(tarea, index)}>
        update
      </button>
    </li>
  );
};

export default TodoListItem;
