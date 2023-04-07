import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, doneTodo, modifyTodo } from '../actions/index';
// import { useState } from 'react';
// import useFetch from '../util/useFetch';
//밑에있는 아이템을 담을 컨테이너
const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 20px;
`;

const TodoList = () => {
  // const innitialTodos = useFetch('http://localhost:3001/todos');
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleDone = (id, done) => {
    dispatch(doneTodo(id, !done));
  };

  const handleModify = (id, text) => {
    dispatch(modifyTodo(id, text));
  };

  return (
    <>
      <TodoListContainer>
        {todos &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                done={todo.done}
                text={todo.text}
                handleRemove={handleRemove}
                handleDone={handleDone}
                handleModify={handleModify}
              ></TodoItem>
            );
          })}
      </TodoListContainer>
    </>
  );
};

export default TodoList;
