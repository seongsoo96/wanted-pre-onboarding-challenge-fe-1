import { Link } from 'react-router-dom';
import Button from './components/Button';

function App() {
  return (
    <>
      <Button type="login">로그인</Button>
      <Button type="signup">회원가입</Button>
      <Button type="todo">Todo List</Button>
    </>
  );
}

export default App;
