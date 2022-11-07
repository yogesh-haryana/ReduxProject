import React, { useState, useEffect } from 'react';
import {
  Table, TableContainer, TableRow, TableCell, TableBody, TableHead,
} from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserInfoModal from './UserInfoModal';
import FormUserData from './FormUserData';

function UserData() {
  // eslint-disable-next-line prefer-const
  let [details, setDetails] = useState([]);
  const [errorMsg, setMsg] = useState('');
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [userDetails, setuserDetails] = useState([]);
  const [formPopUp, setFormPopUp] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setDetails(response.data);
      })
      .catch(() => {
        setMsg('cannot retrieve User-Data');
      });
  }, []);

  const notify = () => toast('User Details Saved Successfully.');

  function FormDataInParentcomp(item) {
    const itemdata = [];
    itemdata.push(item);
    setDetails(details = details.concat(itemdata));
    notify();
  }
  const totalData = details.length;

  return (
    <div className="mainWrapper">
      <div className="buttoncontainer">
        <button type="button" className="addNewUser" onClick={() => setFormPopUp(true)}>Add New User</button>
      </div>
      <TableContainer className="tableContainer">
        <Table className="UserTable">
          <caption>A basic table with user Data from remote API</caption>
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
                      className="clickhere"
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
              (errorMsg) && <div id="errorMsg">{errorMsg}</div>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <FormUserData
        formTrigger={formPopUp}
        totalElements={totalData}
        setFormTrigger={setFormPopUp}
        DataTransfer={FormDataInParentcomp}
      />
      <UserInfoModal info={userDetails} trigger={buttonPopUp} setTrigger={setButtonPopUp} />
      <ToastContainer />
    </div>
  );
}

UserData.propTypes = {};
UserData.defaultProps = {};

export default UserData;
