import initailTodos from './initialTodos';
import { CREATE, REMOVE, DONE, MODIFY } from '../actions/index';

let initTodos = {
  todos: [],
};

//Reducer
const todoReducer = (state = initailTodos, action) => {
  switch (action.type) {
    case CREATE:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      });
    case REMOVE:
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      });

    case DONE:
      let idx = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[idx] = {
        ...state.todos[idx],
        done: action.payload.done,
      };
      return Object.assign({}, state, {
        todos: [...state.todos.slice(0, idx), state.todos[idx], ...state.todos.slice(idx + 1)],
      });

    case MODIFY:
      let midx = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[midx] = {
        ...state.todos[midx],
        text: action.payload.text,
      };
      return Object.assign({}, state, {
        todos: [...state.todos.slice(0, midx), state.todos[midx], ...state.todos.slice(midx + 1)],
      });

    default:
      return state;
  }
};

export default todoReducer;
