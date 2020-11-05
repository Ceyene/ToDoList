import React, { useState, useEffect } from "react";
import "./styles.css";
//Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

export default function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  //Functions and events
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredToDos(toDos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilteredToDos(toDos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  };

  //Run once when the app start
  useEffect(() => {
    getLocalToDos();
  }, []);

  //Use Effect
  useEffect(() => {
    filterHandler(); //se repetirá cada vez que toDos y status se actualicen
    saveLocalToDos(); //guardará en localStorage cada vez
  }, [toDos, status]);

  //Save to LocalState
  const saveLocalToDos = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  };
  const getLocalToDos = () => {
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let toDoLocal = JSON.parse(localStorage.getItem("toDos"));
      setToDos(toDoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Cyn´s To Do List</h1>
      </header>
      <Form
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        toDos={toDos}
        setToDos={setToDos}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}
