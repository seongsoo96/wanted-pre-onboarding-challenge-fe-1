import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';

export default function Header() {
  const homeURL = useMatch('/');
  const authURL = useMatch('/auth');

  let hasToken = localStorage.getItem('token') ? true : false;

  const onLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <>
      <Title>{homeURL ? 'TodoList' : authURL ? 'Auth' : ''}</Title>
      {hasToken && (
        <Button variant="text" onClick={onLogout}>
          로그아웃
        </Button>
      )}
      {!authURL ? (
        <Button variant="text" onClick={onLogout}>
          <Link to="/auth">
            {hasToken ? '계정 바꾸러 가기' : '로그인하러 가기'}
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
