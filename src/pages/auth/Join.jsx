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

  cursor: ${(props) => (props.validation ? 'pointer' : 'default')};
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: ${(props) => (props.validation ? 'green' : null)};
  }

  &:active {
    background: ${(props) => (props.validation ? 'skyblue' : null)};
  }
`;

const Wrapper = styled.div`
  width: 400px;
  margin: 200px auto;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Validation = styled.p`
  margin: 5px 0 10px 0;
  color: red;
  font-size: 1rem;
`;

export default function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailCheck(e.target.value.includes('@') && e.target.value.includes('.'));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordCheck(e.target.value.length > 7 ? true : false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/users/create', {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate('/');
      });
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
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
        <Validation>
          {email.includes('@') && email.includes('.')
            ? ''
            : '이메일은 @와 .이 포함되어야 합니다.'}
        </Validation>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          onChange={handlePasswordChange}
        />
        <Validation>
          {password.length < 8 ? '비밀번호는 최소 8자 이상이어야 합니다.' : ''}
        </Validation>
        <Button
          validation={emailCheck && passwordCheck}
          disabled={emailCheck && passwordCheck ? false : true}>
          가입하기
        </Button>
      </Form>
    </Wrapper>
  );
}
