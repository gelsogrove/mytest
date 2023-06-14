import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MainContextProvider } from '../../../containers/MainContexProvider';
import './NavBar.scss';

const NavBar = () => {
  const { isAuth } = useContext(MainContextProvider);
  return (
    <>
      <nav>
        <div className="container-fluid">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cats">Cats</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li className="col-7">{isAuth ? 'Disconnect' : 'Connect'}</li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
