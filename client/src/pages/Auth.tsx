import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { LoginState } from '../store/LoginStore';
import { useEffect } from 'react';

const url = 'http://127.0.0.1:8080';
type FormType = 'login' | 'join';

const Auth = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState<FormType>('login');
  const setLoginState = useSetRecoilState(LoginState);

  useEffect(() => {
    setLoginState(localStorage.getItem('token') ? true : false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // if (isLogin) {
    //   return navigate('/');
    // }

    if (formType === 'login') {
      axios
        .post(`${url}/users/login`, data)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          setLoginState(true);
          alert(res.data.message);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
          alert(err.data.details);
        });
    }

    if (formType === 'join') {
      axios
        .post(`${url}/users/create`, data)
        .then((res) => {
          alert(res.data.message);
          setFormType('login');
          navigate('/auth');
        })
        .catch((err) => {
          console.log(err);
          alert(err.data.details);
        });
    }
  };

  const onToggleFormType = () => {
    if (formType === 'login') {
      return setFormType('join');
    }
    if (formType === 'join') {
      return setFormType('login');
    }
  };

  return (
    <>
      <Container>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <h1>Auth</h1>
          <TextField
            id="email"
            label="email"
            variant="standard"
            placeholder="이메일 입력"
            fullWidth
            {...register('email', {
              required: '필수 입력값입니다.',
              validate: (email) =>
                (email.includes('@') && email.includes('.')) ||
                '이메일 형식을 지켜주세요.',
              // 이메일 조건
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <P>{message}</P>}
          />

          <TextField
            id="password"
            label="password"
            variant="standard"
            type="password"
            placeholder="비밀번호 입력"
            fullWidth
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: '비밀번호는 최소 8자 이상이어야 합니다.',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <P>{message}</P>}
          />
          <Button type="submit" variant="contained">
            {formType === 'login' ? '로그인' : '회원가입'}
          </Button>
          <Button variant="outlined" onClick={onToggleFormType}>
            {formType === 'login' ? '회원가입하러 가기' : '로그인하러 가기'}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Auth;

const Container = styled.div`
  margin: 150px auto;
  width: 300px;
  height: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const P = styled.p`
  font-size: 0.8rem;
  color: red;
`;

type Inputs = {
  email: string;
  password: string;
};
