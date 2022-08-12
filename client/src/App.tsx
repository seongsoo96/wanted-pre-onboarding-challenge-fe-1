import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Header from './components/Header';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { LoginState } from './store/LoginStore';

function App() {
  const [loginState, setLoginState] = useRecoilState(LoginState);
  useEffect(() => {
    setLoginState(localStorage.getItem('token') ? true : false);
  });

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={loginState ? <Home /> : <Navigate replace to="/auth" />}
        />
        <Route
          path="/auth"
          element={!loginState ? <Auth /> : <Navigate replace to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
