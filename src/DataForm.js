import React from 'react';
import { useFormik } from 'formik';
import './FormStyles.css';
import * as Yup from 'yup'


function DataForm(props) {

    const formik = useFormik({
        initialValues: {
            id: Math.floor(Math.random()*100) +1,
            name: '',
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zip: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            },
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: ''
            }
        },
        onSubmit: values => {
            console.log(values);
        },
        // validate: values => {
        //     let errors = {};
        //     if (!values.name) {
        //         errors.name = 'Name is Required';
        //     }
        //     if (!values.email) {
        //         errors.email = ' email is Required';
        //     } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        //         errors.email = 'invalid email format';
        //     }
        //     if (!values.phone) {
        //         errors.phone = 'Phone number is required';
        //     }
        //     return errors;
        // },
        validationSchema : Yup.object({
            name : Yup.string().required('Required'),
            email : Yup.string().email('invalid email format').required('Required'),
            phone : Yup.number().required('Required')
        })
    });
    // console.log('visited fields',formik.touched);

    return (props.formTrigger) && (
        <div setformtrigger={props.formTrigger}>
            <div className='formpopup'>
                <div className='formoverlay'></div>
                <div className='formcontent'>
                    <div className='form-div'>
                        <h2>User Details Form</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='container container1'>
                                <label htmlFor='name'>Enter a name : </label>
                                <input name='name' type='text' id='name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {(formik.touched.name && formik.errors.name) && <div className='errormsg'>{formik.errors.name}</div>}
                                <label htmlFor='username'>Enter a username : </label>
                                <input name='username' type='text' id='username'
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                />
                                <label htmlFor='email'>Enter a email : </label>
                                <input name='email' type='text' id='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                { (formik.touched.email && formik.errors.email) && <div className='errormsg'>{formik.errors.email}</div>}

                                <label htmlFor='phone'>Enter a phone : </label>
                                <input name='phone' type='text' id='phone'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                                {(formik.touched.phone && formik.errors.phone) && <div className='errormsg'>{formik.errors.phone}</div>}
                                <label htmlFor='website'>Enter a website : </label>
                                <input name='website' type='text' id='website'
                                    onChange={formik.handleChange}
                                    value={formik.values.website}
                                />
                                <div>
                                    <h2>company</h2>
                                    <label htmlFor='companyname'>Enter a companyName : </label>
                                    <input name='company.name' type='text' id='companyname'
                                        onChange={formik.handleChange}
                                        value={formik.values.company.name}
                                    />
                                    <label htmlFor='catchPhrase'>Enter a catchPhrase : </label>
                                    <input name='company.catchPhrase' type='text' id='catchPhrase'
                                        onChange={formik.handleChange}
                                        value={formik.values.company.catchPhrase}
                                    />
                                    <label htmlFor='bs'>Enter a bs : </label>
                                    <input name='company.bs' type='text' id='bs'
                                        onChange={formik.handleChange}
                                        value={formik.values.company.bs}
                                    />
                                </div>
                            </div>
                            <div className='container container2' >
                                <h3>Address :</h3>
                                <label htmlFor='street'>Enter a street : </label>
                                <input name='address.street' type='text' id='street'
                                    onChange={formik.handleChange}
                                    value={formik.values.address.street}
                                />
                                <label htmlFor='suite'>Enter a suite : </label>
                                <input name='address.suite' type='text' id='suite'
                                    onChange={formik.handleChange}
                                    value={formik.values.address.suite}
                                />
                                <label htmlFor='city'>Enter a city : </label>
                                <input name='address.city' type='text' id='city'
                                    onChange={formik.handleChange}
                                    value={formik.values.address.city}
                                />
                                <label htmlFor='zip'>Enter a zip : </label>
                                <input name='address.zip' type='text' id='zip'
                                    onChange={formik.handleChange}
                                    value={formik.values.address.zip}
                                />
                                <div>
                                    <h3>Geo</h3>
                                    <label htmlFor='lat'>Enter a lat : </label>
                                    <input name='address.geo.lat' type='text' id='lat'
                                        onChange={formik.handleChange}
                                        value={formik.values.address.geo.lat}
                                    />
                                    <label htmlFor='lng'>Enter a lng : </label>
                                    <input name='address.geo.lng' type='text' id='lng'
                                        onChange={formik.handleChange}
                                        value={formik.values.address.geo.lng}
                                    />
                                </div>
                            </div>
                            <button type='submit' className='submit-btn' onClick={() => props.DataTransfer(formik.values)}>Submit</button>
                            <a className='close-form' onClick={() => props.setFormTrigger(false)}>×</a>
                        </form >
                    </div>
                </div >
            </div >
        </div >
    );
}
export default DataForm;