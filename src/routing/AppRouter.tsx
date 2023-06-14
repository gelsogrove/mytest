import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cats from '../pages/cats/components/Cat/Cats';
import ContactUS from '../pages/contactus/ContactUS';
import Dashboard from '../pages/dashboard/Dashboard';

import { Layout } from '../shared/components/layout/Layout/Layout';
import { MainContextProvider } from '../shared/context/MainContexProvider';

const AppRouter = (): JSX.Element => {
  const [isAuth, setAuth] = useState(false);
  const contextValue = useMemo(() => ({ isAuth, setAuth }), [isAuth, setAuth]);

  return (
    <MainContextProvider.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout isPrivate={false}>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/contactus"
            element={
              <Layout isPrivate={false}>
                <ContactUS />
              </Layout>
            }
          />
          <Route
            path="/cats"
            element={
              <Layout isPrivate>
                <Cats />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </MainContextProvider.Provider>
  );
};

export default AppRouter;
