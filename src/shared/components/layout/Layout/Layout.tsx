import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { FC, useContext, useState } from 'react';
import { MainContextProvider } from '../../../context/MainContexProvider';
import Login from '../Login/Login';
import NavBar from '../NavBar/NavBar';
import { useStyles } from '../styles/material-ui';

interface LayoutProps {
  isPrivate: boolean;
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ isPrivate, children }) => {
  const classes = useStyles();
  const { isAuth } = useContext(MainContextProvider);
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Toolbar>
              <IconButton color="inherit" onClick={() => setIsOpened(!isOpened)} className={classes.icon}>
                {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
              </IconButton>
            </Toolbar>
          </Grid>

          <Grid item xs={10}></Grid>

          <Grid item xs={1}>
            <br />
            <Login />
          </Grid>
        </Grid>
      </AppBar>
      <Toolbar />
      <div className={classes.container}>
        <Drawer
          variant="permanent"
          classes={{
            paper: `${classes.drawer} ${isOpened ? classes.opened : classes.closed}`,
          }}
        >
          <NavBar />
        </Drawer>
        <main className={classes.main}>
          {/* CONTENT */}
          {!isPrivate && <>{children}</>}

          {isAuth && isPrivate && <>{children}</>}
        </main>
      </div>
      <div className={classes.footer}>
        <Typography variant="h6">Footer</Typography>
      </div>
    </div>
  );
};
