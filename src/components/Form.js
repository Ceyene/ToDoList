import React from "react";

/* es lo mismo poner: 
const Form = (props) => { */
const Form = ({ inputText, setInputText, toDos, setToDos, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    //acá pondría: props.setInputText(e.target.value)
    setInputText(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    //acá pondría: props.setToDos
    setToDos([
      //acá pondría: ...props.toDos
      ...toDos,
      //acá pondría: props.inputText
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="ToDo-Input"
      />
      <button onClick={submitTodoHandler} className="ToDo-Button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="Select">
        <select onChange={statusHandler} name="todos" className="Filter-ToDo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
