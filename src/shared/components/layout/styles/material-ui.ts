import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    color: '#FC86AA',
  },
  appBar: {
    background: '#00022E',
    color: '#FC86AA',
  },
  icon: {
    padding: '10px',
  },
  title: {
    margin: 'auto',
  },
  container: {
    display: 'flex',
    flex: 1,
    margin: '4px',
  },
  drawer: {
    background: '#D8DCD6',
    position: 'static',
    transition: 'width .7s',
  },
  closed: {
    width: '0px',
  },
  opened: {
    width: '240px',
  },
  main: {
    flex: 1,
    background: '#f7f5f5',
    color: 'black',
  },
  footer: {
    background: '#00022E',
    height: '50px',
    color: '#FC86AA',
  },
});
