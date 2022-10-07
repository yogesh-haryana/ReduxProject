import React, { useState } from 'react'
import './PopUpstyles.css'



function PopUpComp(props) {


    return (props.trigger) && (
        <div setTrigger={props.trigger}>
            <div className='popup'>
                <div className='overlay'></div>
                <div className='content'>
                    <div id='info'>User's Information</div>
                    <div>  Full Name : {props.info.name}</div>
                    <div> Email : {props.info.email}</div>
                    <div>  city : {props.info.address.city}</div>
                    <div>zip code : {props.info.address.zipcode}</div>
                    <div>  Phone no. : {props.info.phone}</div>
                    <div> website : {props.info.website}</div>
                    <div>  Company name  : {props.info.company.name}</div>

                    <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>

                </div>
            </div>

        </div>)

}

export default PopUpComp