import React, { useState } from "react";
import "./styles.css";
//Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Cyn´s To Do List</h1>
      </header>
      <Form setInputText={setInputText} />
      <ToDoList />
    </div>
  );
}
