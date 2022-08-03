import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: gray;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
const Button = styled.button`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: gray;
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: 'pointer';
  /* cursor: ${(props) => (props.validation ? 'pointer' : 'default')}; */
  user-select: none;
  transition: 0.2s all;

  &:hover {
    /* background: ${(props) => (props.validation ? 'green' : null)}; */
    background: 'green';
  }

  &:active {
    /* background: ${(props) => (props.validation ? 'skyblue' : null)}; */
    background: 'skyblue';
  }
`;

const Wrapper = styled.div`
  width: 400px;
  margin: 200px auto;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

// const Validation = styled.p`
//   margin: 5px 0 10px 0;
//   color: red;
//   font-size: 1rem;
// `;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [emailCheck, setEmailCheck] = useState(false);
  //   const [passwordCheck, setPasswordCheck] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // setEmailCheck(e.target.value.includes('@') && e.target.value.includes('.'));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // setPasswordCheck(e.target.value.length > 7 ? true : false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/users/login', {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        localStorage.setItem('token', res.data.token);
        navigate('/');
      });
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={handleEmailChange}
        />
        {/* <Validation>
          {email.includes('@') && email.includes('.')
            ? ''
            : '이메일은 @와 .이 포함되어야 합니다.'}
        </Validation> */}
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          onChange={handlePasswordChange}
        />
        {/* <Validation>
          {password.length < 8 ? '비밀번호는 최소 8자 이상이어야 합니다.' : ''}
        </Validation> */}
        <Button
        //   validation={emailCheck && passwordCheck}
        //   disabled={emailCheck && passwordCheck ? false : true}
        >
          로그인
        </Button>
      </Form>
    </Wrapper>
  );
}
