import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

import "./App.css";

const App = () => {
  return (
    <>
      <h1>Redux todo</h1>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default App;
