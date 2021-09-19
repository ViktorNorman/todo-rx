import { ADD_TODO, LOAD_TODOS, REMOVE_TODO } from "../actions/actionTypes";

export const todoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_TODOS:
      return {
        ...state,
        todos: [
          ...state.todos,
          { value: payload.value, id: Math.random().toString(), done: false },
        ],
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { value: payload, id: Math.random().toString(), done: false },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    default:
      return state;
  }
};
