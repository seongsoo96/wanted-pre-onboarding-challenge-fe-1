import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LoginState } from '../store/LoginStore';

export default function Header() {
  const homeURL = useMatch('/');
  const authURL = useMatch('/auth');
  const navigate = useNavigate();
  const [loginState, setLoginState] = useRecoilState(LoginState);

  const onLogout = () => {
    localStorage.removeItem('token');
    setLoginState(false);
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <>
      <Title>{homeURL ? 'TodoList' : authURL ? 'Auth' : ''}</Title>
      {loginState && (
        <Button variant="text" onClick={onLogout}>
          로그아웃
        </Button>
      )}
      {!authURL && (
        <Button variant="text" onClick={onLogout}>
          <Link to="/auth">
            {loginState ? '계정 바꾸러 가기' : '로그인하러 가기'}
          </Link>
        </Button>
      )}
    </>
  );
}

const Title = styled.h1`
  font-size: 18px;
  font-family: bold;
`;
