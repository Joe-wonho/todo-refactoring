import styled from 'styled-components';
import TodoList from '../components/TodoList';
import { FiPlus } from 'react-icons/fi';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../actions/index';
const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  align-items: center;
  .TodoInsert {
    display: flex;
    width: 80%;
    position: relative;
    margin-bottom: 30px;
    input {
      flex-grow: 1;
      height: 45px;
      border: 1px solid #5c5757;
      border-radius: 1rem;
      text-align: center;
      outline: none;
    }
    button {
      position: absolute;
      width: 45px;
      height: 45px;
      font-size: 25px;
      right: 10px;
      &:hover {
        transform: scale(1.2, 1.2);
      }
    }
  }
`;

const Home = ({ todos }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    const todo = {
      text: text,
    };
    dispatch(createTodo(todo));
    setText('');
  };

  return (
    <>
      <Container>
        <form className="TodoInsert">
          <input onChange={handleChange} value={text} placeholder="할 일을 입력하세요." maxLength={70}></input>
          <button type="button" onClick={handleClick}>
            <FiPlus />
          </button>
        </form>
        <TodoList />
      </Container>
    </>
  );
};

export default Home;
