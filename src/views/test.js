import React from "react";
import { changeName } from "../actions/actions";
import useObservable from "../hooks/useObservable";

export default function Test() {
  const { nameReducer } = useObservable();

  const handleClick = (e) => {
    e.preventDefault();

    changeName(Math.random().toString());
  };

  return (
    <div className="todo">
      {nameReducer?.name}
      <button className="todo__button" onClick={handleClick}>
        Change name
      </button>
    </div>
  );
}
