import { dispatch, dispatchAsync } from "../store/store";
import { ADD_TODO, LOAD_TODOS, REMOVE_TODO } from "./actionTypes";

export const changeName = dispatch((payload) => ({
  type: "NAME_CHANGED",
  payload,
}));

export const loadTodos = dispatchAsync((payload) => ({
  type: LOAD_TODOS,
  payload,
}));

export const addTodo = dispatch((payload) => ({
  type: ADD_TODO,
  payload,
}));

export const removeTodo = dispatch((payload) => ({
  type: REMOVE_TODO,
  payload,
}));
