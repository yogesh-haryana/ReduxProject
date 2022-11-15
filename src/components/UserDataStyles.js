import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  '@global': {
    body: {
      fontFamily: 'Roboto,sans-serif',
      fontSize: '1rem',
      margin: 0,
      height: '100vh',
      alignItems: 'center',
    },
  },

  UserTable: {
    margin: '25px 0',
    border: '1px solid #BAD1C2',
    '& th': {
      border: '1px solid #BAD1C2',
      background: '#04AA6D',
      fontSize: '18px',
      fontWeight: '700',
      color: '#fff',
    },
    '& td': {
      border: '1px solid #BAD1C2',
    },
  },
  mainWrapper: {
    width: '70%',
    margin: '0 auto',
  },
  errorMsg: {
    color: 'red',
    fontSize: 'larger',
  },
  tableContainer: {
    position: 'relative',
  },
  clickhere: {
    background: 'transparent',
    border: 'none',
    color: 'blue',
    '&:hover': {
      cursor: 'pointer',
      color: 'rgb(250,82,39)',
    },
  },
});

export default useStyles;
