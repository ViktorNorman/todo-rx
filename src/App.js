import React from "react";
import "./App.css";
import Test from "./views/test";
import Todo from "./views/todo";

export default function App() {
  return (
    <div className="App">
      <Todo />
      <Test />
    </div>
  );
}
