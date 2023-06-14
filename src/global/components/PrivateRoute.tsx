import React, { useContext } from 'react';
import { MainContextProvider } from '../containers/MainContexProvider';
import Login from './layout/Login/Login';

interface PrivateRouteProps {
  children: React.ReactNode;
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuth } = useContext(MainContextProvider);

  if (isAuth) {
    return (
      <>
        <Login />

        {children}
      </>
    );
  }

  return <Login />;
};
