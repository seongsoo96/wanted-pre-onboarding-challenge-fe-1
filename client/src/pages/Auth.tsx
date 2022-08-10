import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import { isAnyArrayBuffer } from 'util/types';

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

const url = 'http://127.0.0.1:8080';

const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    axios.post(`${url}/users/create`, data).then((res) => console.log(res));
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
            로그인
          </Button>
          {/* <Button variant="outlined">회원가입</Button> */}
        </Box>
      </Container>
    </>
  );
};

export default Auth;
