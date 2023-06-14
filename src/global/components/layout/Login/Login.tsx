import { useContext } from 'react';
import { MainContextProvider } from '../../../containers/MainContexProvider';

const Login = () => {
  const { isAuth, setAuth } = useContext(MainContextProvider);

  return (
    <>
      <button onClick={() => setAuth(!isAuth)}>{isAuth ? 'Disconnect' : 'Connect'}</button>
    </>
  );
};

export default Login;
