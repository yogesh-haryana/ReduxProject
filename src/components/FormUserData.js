import { React } from 'react';
import '../Styles/FormCss.css';
import { Stack, TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

function FormUserData(props) {
  const {
    formTrigger, setFormTrigger,
    DataTransfer,
  } = props;
  const {
    register, handleSubmit, reset,
    // errors,
  } = useForm();

  const onSubmit = (data, dataTransfer) => {
    dataTransfer(data);
    setFormTrigger(false);
    reset('');
  };

  return (formTrigger) && (
    <div>
      <div className="formpopup">
        <div className="formoverlay" />
        <div className="formcontent">
          <Stack spacing={2}>
            <div className="popupheader">
              <p className="formheading">User Details Form</p>
            </div>
            <div className="formbody">
              <form name="userdataform" onSubmit={handleSubmit((e) => onSubmit(e, DataTransfer))}>
                <h3>Personal Details: </h3>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    {...register('name', { required: true, maxLength: 25, pattern: /^[a-zA-Z ]*$/ })}
                  />
                  <TextField
                    label="UserName"
                    variant="outlined"
                    {...register('username', { required: true })}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    {...register('email', { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                  />
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    {...register('phoneNumber', { required: true, pattern: /^[0-9]{10}$/ })}
                  />
                </Stack>
                <br />
                <Stack direction="row" spacing={2}>

                  <TextField
                    label="Website"
                    variant="outlined"
                    {...register('website', { required: true, pattern: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/ })}
                  />
                </Stack>
                <h3>Company: </h3>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    {...register('company.name', { required: true, pattern: /^[a-zA-Z ]*$/ })}

                  />
                  <TextField
                    label="Bs"
                    variant="outlined"
                    {...register('company.bs', { required: true, pattern: /^[a-zA-Z ]*$/ })}
                  />
                  <TextField
                    label="Catch Phrase"
                    variant="outlined"
                    {...register('company.catchphrase', { required: true, pattern: /^[a-zA-Z ]*$/ })}
                  />
                </Stack>
                <h3>Address: </h3>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Street"
                    variant="outlined"
                    {...register('address.street', { required: true, pattern: /^[a-zA-Z ]*$/ })}
                  />
                  <TextField
                    label="Suite"
                    variant="outlined"
                    {...register('address.suite', { required: true })}

                  />
                  <TextField
                    label="City"
                    variant="outlined"
                    {...register('address.city', { required: true, pattern: /^[a-zA-Z ]*$/ })}
                  />
                  <TextField
                    label="Zip"
                    variant="outlined"
                    {...register('address.zip', { required: true, pattern: /^[0-9]{6}$/ })}
                  />
                </Stack>
                <h3>Geo: </h3>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="lat"
                    variant="outlined"
                    {...register('address.geo.lat', { required: true, pattern: /^\d*\.?\d*$/ })}
                  />
                  <TextField
                    label="lng"
                    variant="outlined"
                    {...register('address.geo.lng', { required: true, pattern: /^\d*\.?\d*$/ })}
                  />
                </Stack>
                <div className="buttons-container">
                  <Button type="submit" variant="contained" className="submit-btn">Submit</Button>
                  <Button variant="outlined" className="cancle-btn" onClick={() => setFormTrigger(false)}>Cancel</Button>
                </div>
              </form>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
}

FormUserData.propTypes = {
  formTrigger: PropTypes.bool.isRequired,
  DataTransfer: PropTypes.func.isRequired,
  setFormTrigger: PropTypes.func.isRequired,
};

FormUserData.defaultProps = {};

export default FormUserData;
