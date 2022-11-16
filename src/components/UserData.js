import React, { useState, useEffect } from 'react';
import {
  Table, TableContainer, TableRow, TableCell, TableBody, TableHead,
} from '@mui/material';
import axios from 'axios';
import UserInfoModal from './UserInfoModal';
import useStyles from './UserDataStyles';

function UserData() {
  const classes = useStyles();
  const [details, setDetails] = useState([]);
  const [errorMsg, setMsg] = useState('');
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [userDetails, setuserDetails] = useState([]);

  useEffect(() => {
    let localUserData;
    const oldRecords = localStorage.getItem('userdata');
    if (oldRecords == null) {
      localUserData = [];
    } else {
      localUserData = JSON.parse(oldRecords);
    }
    if (!localStorage.getItem('userdata')) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          localStorage.setItem('userdata', JSON.stringify(response.data));
          setDetails(response.data);
        })
        .catch(() => {
          setMsg('cannot retrieve User-Data');
        });
    }
    setDetails(localUserData);
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
              details.length && details.map((detail) => (
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
