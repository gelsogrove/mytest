import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '../global/components/PrivateRoute';

import Cats from '../features/cats/components/Cat/Cats';
import ContactUS from '../features/contactus/ContactUS';
import Dashboard from '../features/dashboard/Dashboard';

import NavBar from '../global/components/layout/NavBar/NavBar';
import { MainContextProvider } from '../global/containers/MainContexProvider';

const AppRouter = (): JSX.Element => {
  const [isAuth, setAuth] = useState(false);
  const contextValue = useMemo(() => ({ isAuth, setAuth }), [isAuth, setAuth]);

  return (
    <MainContextProvider.Provider value={contextValue}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route
            path="/cats"
            element={
              <PrivateRoute>
                <Cats />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </MainContextProvider.Provider>
  );
};

export default AppRouter;
