import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import { GlobalStyle } from './styles/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
