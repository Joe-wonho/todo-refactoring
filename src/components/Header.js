import styled from 'styled-components';
import LinkTag from './LinkTag';

const HeaderContainer = styled.div`
  width: 100vw;
  min-width: 1024px;
  height: 100px;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  position: relative;
  .title {
    font-size: 35px;
  }
  .login-btn {
    position: absolute;
    right: 50px;
    top: calc(100% / 3.5);
    border: 1px solid;
    padding: 9px;
    transition-duration: ease-in-out;
    border-radius: 1rem;
    font-size: 18px;

    &:hover {
      background-color: #efecec;
    }
  }
  @media screen and (max-width: 1023px) {
    min-width: 500px;
    width: 100vw;
    .title {
      font-size: 30px;
    }
    .login-btn {
      border: none;
      font-size: 15px;
      top: 33%;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LinkTag url="/" className="title">
          <div className="title">투두리스트</div>
        </LinkTag>
        <LinkTag url="/login">
          <button className="login-btn">로그인</button>
        </LinkTag>
      </HeaderContainer>
    </>
  );
};

export default Header;
