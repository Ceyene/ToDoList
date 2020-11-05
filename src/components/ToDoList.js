import React from "react";
//import Components
import ToDo from "./ToDo";

const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
  return (
    <div className="ToDo-Container">
      <ul className="ToDo-List">
        {filteredToDos.map((toDo) => (
          <ToDo
            toDos={toDos}
            setToDos={setToDos}
            text={toDo.text}
            key={toDo.id}
            toDo={toDo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
