import styled, { css } from 'styled-components';
import { BsCheck2 } from 'react-icons/bs';
import { useState, useRef, useEffect } from 'react';

//애는 아이템 하나하나
const TodoItemContainer = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border: 1px solid #5c5757;
  border-radius: 0.5rem;
  padding: 5px;
  /* 위에 커서가 있을 때, button 보여주라는 의미 */
  &:hover {
    button {
      display: initial;
    }
  }

  .checkbox {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #898080;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-text {
    flex-grow: 1;
    color: #495057;

    /* 여러 줄의 CSS 코드를 조건부로 보여주고 싶다면 css 를 사용해야합니다., 
    css 를 불러와서 사용을 해야 그 스타일 내부에서도 다른 props 를 조회 할 수 있습니다 */
    ${(props) =>
      props.done &&
      css`
        text-decoration: line-through;
        color: #b2b2b2;
      `}
  }
  button {
    font-size: 16px;
    color: #898080;
    display: none;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TodoItemContainer2 = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid #5c5757;
  border-radius: 0.5rem;
  padding: 5px;

  .checkbox {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #898080;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
  }
  form {
    display: flex;
    gap: 15px;
    flex-grow: 1;

    input {
      flex-grow: 1;
      color: #495057;
      border: none;
      border-bottom: 1px solid #6d6d6d;
      /* padding: 1px; */
      background-color: transparent;
      &:focus {
        outline: none;
      }
    }
    button {
      font-size: 16px;
      color: #898080;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const TodoItem = ({ id, text, done, handleRemove, handleDone, handleModify }) => {
  //수정을 위한 상태관리
  const [mode, setMode] = useState(false);
  const [modifyText, setText] = useState(text);

  // 수정 버튼 누르면 input에 포커스를 위한 useRef활용
  const modifyInputRef = useRef(null);

  // 수정 버튼을 누르면 포커싱을 한다.
  useEffect(() => {
    if (mode) {
      modifyInputRef.current.focus();
    }
  }, [mode]);

  //인풋값 텍스트 상태 관리
  const onModifyText = (e) => {
    setText(e.target.value);
  };

  // 수정모드로 변경
  const handleMode = () => {
    setMode(!mode);
  };

  //수정 취소
  const handleCancle = () => {
    setText(text);
    setMode(!mode);
  };

  //수정 완료 버튼 클릭
  const handleComplete = () => {
    setText(modifyText);
    setMode(!mode);
  };

  return (
    <>
      {mode ? (
        <TodoItemContainer2 id={id} done={done}>
          <div onClick={() => handleDone(id, done)} className="checkbox">
            {done && <BsCheck2 />}
          </div>
          <form>
            <input ref={modifyInputRef} onChange={onModifyText} value={modifyText} maxLength={70}></input>
            <button
              type="button"
              onClick={() => {
                handleModify(id, modifyText);
                handleComplete();
              }}
              className="update-btn"
            >
              수정완료
            </button>
            <button type="button" onClick={handleCancle} className="remove-btn">
              취소
            </button>
          </form>
        </TodoItemContainer2>
      ) : (
        <TodoItemContainer id={id} done={done}>
          <div onClick={() => handleDone(id, done)} className="checkbox">
            {done && <BsCheck2 />}
          </div>
          <div className="todo-text">{text}</div>
          {done ? null : (
            <button type="button" onClick={handleMode} className="update-btn">
              수정
            </button>
          )}

          <button onClick={() => handleRemove(id)} className="remove-btn">
            삭제
          </button>
        </TodoItemContainer>
      )}
    </>
  );
};

export default TodoItem;
