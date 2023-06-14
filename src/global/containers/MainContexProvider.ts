import { createContext } from 'react';
import { MainContextProviderType } from './MainContexProviderType';

export const MainContextProvider = createContext<MainContextProviderType>({
  isAuth: false,
  setAuth: () => undefined,
});
