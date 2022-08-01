import axios from 'axios';
import React, { useState } from 'react';

export default function Join() {
  const [email, setEmeil] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/users/create', {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">이메일</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmeil(e.target.value)}
        />
        <br />
        <label htmlFor="password">비밀번호</label>
        <br />
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>가입하기</button>
      </form>
    </>
  );
}
