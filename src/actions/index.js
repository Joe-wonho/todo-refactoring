//Actions
export const CREATE = 'TODOS/CREATE';
export const REMOVE = 'TODOS/REMOVE';
export const DONE = 'TODOS/DONE';
export const MODIFY = 'TODOS/MODIFY';

//Action Creators
let id = 4;
export const createTodo = (todo) => {
  return {
    type: CREATE,
    payload: {
      id: id++,
      text: todo.text,
      done: false,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE,
    payload: {
      id,
    },
  };
};

export const doneTodo = (id, done) => {
  return {
    type: DONE,
    payload: {
      id,
      done,
    },
  };
};

export const modifyTodo = (id, text) => {
  return {
    type: MODIFY,
    payload: {
      id,
      text,
    },
  };
};
