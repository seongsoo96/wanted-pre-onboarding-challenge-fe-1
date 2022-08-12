import { atom } from 'recoil';

export const LoginState = atom<boolean>({
  key: 'loginState',
  default: false,
});
