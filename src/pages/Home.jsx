import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/login">
        <button>로그인</button>
      </Link>
      <Link to="/join">
        <button>회원가입</button>
      </Link>
    </div>
  );
}

export default Home;
