import React, { useState, useEffect } from 'react';
import {
  Table, TableContainer, TableRow, TableCell, TableBody, TableHead,
} from '@mui/material';
import ApiHelper from './ApiHelper';
import UserInfoModal from './UserInfoModal';
import useStyles from './UserDataStyles';

function UserData() {
  const classes = useStyles();
  const [details, setDetails] = useState([]);
  const [errorMsg, setMsg] = useState('');
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [userDetails, setuserDetails] = useState([]);

  function successHandler(response) {
    setDetails(response);
    setMsg('');
  }
  function errorHandler() {
    setMsg('UserData Cannot Retrieved');
  }

  useEffect(() => {
    const httpObj = {
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
    };
    ApiHelper(httpObj, successHandler, errorHandler);
  }, []);

  return (
    <div className={classes.mainWrapper}>
      <TableContainer sx={{ maxHeight: 500 }} className={classes.tableContainer}>
        <Table stickyHeader aria-label="sticky table" className={classes.UserTable}>
          <TableHead>
            <TableRow>
              <TableCell>FullName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>More Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              details?.length && details.map((detail) => (
                <TableRow key={detail?.id}>
                  <TableCell>{detail?.name}</TableCell>
                  <TableCell>{detail?.email}</TableCell>
                  <TableCell>{detail?.address?.city}</TableCell>
                  <TableCell>
                    <button
                      type="button"
                      className={classes.clickhere}
                      onClick={
                        () => setuserDetails(detail, setButtonPopUp(true))
                      }
                    >
                      Click Here
                    </button>
                  </TableCell>
                </TableRow>
              ))
            }
            {
              (errorMsg) && <div className={classes.errorMsg}>{errorMsg}</div>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <UserInfoModal info={userDetails} trigger={buttonPopUp} setTrigger={setButtonPopUp} />
    </div>
  );
}

export default UserData;
