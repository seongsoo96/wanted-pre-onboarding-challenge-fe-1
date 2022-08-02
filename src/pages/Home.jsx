import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;

`;

function Home() {
  return (
    <Wrapper>
      <Link to="/auth">
        <Button>로그인/회원가입</Button>
      </Link>
      <Link to="/join">
        <Button>회원가입</Button>
      </Link>
    </Wrapper>
  );
}

export default Home;
