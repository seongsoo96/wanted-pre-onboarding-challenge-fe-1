import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Todo from './todo/Todo';

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;

function Home() {
  const token = localStorage.getItem('token');
  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
  };

  return (
    <Wrapper>
      {token ? (
        <>
          <Link to="/" onClick={handleLogoutClick}>
            <Button>로그아웃</Button>
          </Link>
          <Todo />
        </>
      ) : (
        <>
          <Link to="/login">
            <Button>로그인</Button>
          </Link>
          <Link to="/join">
            <Button>회원가입</Button>
          </Link>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
