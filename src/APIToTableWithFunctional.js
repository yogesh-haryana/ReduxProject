import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopUpComp from './PopUpComp';
import DataForm from './DataForm';


function APIToTableWithFunctional() {

    let [details, setDetails] = useState([]);
    const [errorMsg, setMsg] = useState('');
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [userDetails, setuserDetails] = useState([]);
    const [formPopUp, setFormPopUp] = useState(false);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response);
                setDetails(response.data);
            })
            .catch(error => {
                console.log(error);
                setMsg('cannot retrieve User-Data');
            });

    },
    []);

    function FormDataInParentcomp(item) {
        let itemdata = [];
        itemdata.push(item);
        setDetails(details = details.concat(itemdata));
        setFormPopUp(false);
        console.log('final array is here ', details);
        
    }
    const totalData = details.length;

    return (
        <div>
            <div className='buttoncontainer'>
                <button className='addNewUser' onClick={() => setFormPopUp(true)} >Add New User</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>FullName</td>
                        <td>Email</td>
                        <td>City</td>
                        <td>Action</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        details.length && details.map(detail => <tr key={detail?.id}><td>{detail?.name}</td>
                            <td>{detail?.email}</td>
                            <td>{detail?.address?.city}</td>
                            <td><a
                                onClick={
                                    () => setuserDetails(detail, setButtonPopUp(true))} >More Info</a></td></tr>)
                    }
                    {
                        (errorMsg) && <div id='errorMsg'>{errorMsg}</div>

                    }</tbody>
            </table>
            <DataForm formTrigger={formPopUp} totalElements={totalData} setFormTrigger={setFormPopUp} DataTransfer={FormDataInParentcomp}></DataForm>
            <PopUpComp info={userDetails} trigger={buttonPopUp} setTrigger={setButtonPopUp}></PopUpComp>
        </div>
    );
}

export default APIToTableWithFunctional;