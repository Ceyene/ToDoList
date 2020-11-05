import React from "react";

const ToDo = ({ text, toDo, toDos, setToDos }) => {
  //Events
  const deleteHandler = () => {
    setToDos(toDos.filter((item) => item.id !== toDo.id));
  };
  const completeHandler = () => {
    setToDos(
      toDos.map((item) => {
        if (item.id === toDo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="ToDo">
      <li className={`ToDo-Item ${toDo.completed ? "Completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="Complete-Btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="Trash-Btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
