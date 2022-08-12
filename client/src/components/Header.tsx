import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';

export default function Header() {
  const homeURL = useMatch('/');
  const authURL = useMatch('/auth');
  const navigate = useNavigate();
  const [isLogined, setIsLogined] = useState(
    localStorage.getItem('token') ? true : false
  );
  console.log(isLogined);

  useEffect(() => {
    if (!isLogined) {
      navigate('/auth');
    }
  }, [isLogined, navigate]);

  const onLogout = () => {
    localStorage.removeItem('token');
    setIsLogined(false);
    alert('로그아웃 되었습니다.');
  };

  return (
    <>
      <Title>{homeURL ? 'TodoList' : authURL ? 'Auth' : ''}</Title>
      {console.log(`isLogined : ${isLogined}`)}
      {isLogined && (
        <Button variant="text" onClick={onLogout}>
          로그아웃
        </Button>
      )}
      {!authURL ? (
        <Button variant="text" onClick={onLogout}>
          <Link to="/auth">
            {isLogined ? '계정 바꾸러 가기' : '로그인하러 가기'}
          </Link>
        </Button>
      ) : (
        <Button variant="text">
          <Link to="/">홈</Link>
        </Button>
      )}
    </>
  );
}

const Title = styled.h1`
  font-size: 18px;
  font-family: bold;
`;
