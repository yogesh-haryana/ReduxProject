import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PopUpComp from './PopUpComp'


function APIToTableWithFunctional() {

    const [details, setDetails] = useState([])
    const [errorMsg, setMsg] = useState('')
    const [buttonPopUp, setButtonPopUp] = useState(false)
    const [userDetails, setuserDetails] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response);
                setDetails(response.data)

            })
            .catch(error => {
                console.log(error);
                setMsg('cannot retrieve User-Data')
            })

    },
        [])

    // const ClickHandler = () => {
    //    buttonPopUp= setButtonPopUp(true);
    //    userDetails = setuserDetails(detail)
    // }
    return (
        <div>
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
                    details.length &&
                    details.map(detail => <tr key={detail?.id}><td>{detail?.name}</td>
                        <td>{detail?.email}</td>
                        <td>{detail?.address?.city}</td>
                        <td><button 
                        onClick={
                            () => setuserDetails(detail,setButtonPopUp(true))} >click Here</button></td></tr>)
                    }
                    {
                        (errorMsg) && <div id='errorMsg'>{errorMsg}</div>

                    }</tbody>
            </table>
            <PopUpComp  info = {userDetails} trigger = {buttonPopUp} setTrigger = {setButtonPopUp}></PopUpComp>
        </div>
    )
}

export default APIToTableWithFunctional