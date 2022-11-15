import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  formcontent: {
    padding: 10,
    background: '#fff',
    width: '60%',
    fontSize: 12,
    boxSizing: 'border-box',
    border: '1px solid #BAD1C2',
    borderRadius: 3,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    '& input': {
      fontSize: '14px',
      padding: '7px',
      width: 200,
      // height: 12,
    },
  },
  popupheader: {
    textAlign: 'center',
    width: '100%',
    height: '40px',
    lineHeight: '2px',
  },
  formheading: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#04AA6D',
  },
  formSubHeading: {
    fontSize: '17px',
    fontWeight: 500,
    color: '#04AA6D',
  },
  formbody: {
    width: '100%',
    margin: '0auto!important',
    padding: '0px12px12px12px',
  },
  buttonsContainer: {
    marginTop: '10px',
    marginRight: '3%',
  },
  cancleBtn: {
    fontSize: '12px !important',
    float: 'right',
    cursor: 'pointer',
    height: '30px',
    width: '65px',
  },
  submitBtn: {
    fontSize: '12px !important',
    float: 'right',
    cursor: 'pointer',
    height: '30px',
    width: '65px',
    marginLeft: '15px !important',
  },
  errorMsg: {
    color: '#d32f2f',
    display: 'block',
  },
  Toastify__toast: {
    backgroundColor: 'green',
    color: '#fff',
  },
});

export default useStyles;
