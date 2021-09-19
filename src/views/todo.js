import React, { useRef, useEffect } from "react";
import { addTodo, removeTodo, loadTodos } from "../actions/actions";
import useObservable from "../hooks/useObservable";

export default function Todo() {
  const inputState = useRef("");

  const { todoReducer } = useObservable();

  useEffect(() => {
    loadTodos("https://api.chucknorris.io/jokes/random");
  }, []);

  const changeHandler = (e) => {
    e.preventDefault();
    inputState.current = e.target.value;
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    addTodo(inputState.current);
  };

  const removeTodoHandler = (todo) => {
    removeTodo(todo);
  };

  const listItems = todoReducer.todos?.map((todo, index) => (
    <div key={todo.id} onClick={() => removeTodoHandler(todo)}>
      {todo.value}
    </div>
  ));

  return (
    <div className="todo">
      <input type="text" onChange={changeHandler} />

      <button className="todo__button" onClick={addTodoHandler}>
        Change name
      </button>
      {listItems}
    </div>
  );
}
