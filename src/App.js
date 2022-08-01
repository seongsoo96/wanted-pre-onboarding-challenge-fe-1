import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Button from './components/Button';
import Join from './pages/auth/Join';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Todo from './pages/todo/Todo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/todo/:id" element={<Todo />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
