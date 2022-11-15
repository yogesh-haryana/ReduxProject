import { React } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './FormStyle';

function Form() {
  const classes = useStyles();
  const {
    register, handleSubmit, reset,
    formState: { errors },
  } = useForm();

  const notify = () => toast('User Details Saved Successfully.');

  const onSubmit = (data) => {
    const item = data;
    item.id = Math.floor(Math.random() * Math.random() * 100) + 1;
    let localUserData;
    if (localStorage.getItem('userdata')) {
      localUserData = JSON.parse(localStorage.getItem('userdata'));
    } else {
      localUserData = [];
    }
    localUserData.push(item);
    localStorage.setItem('userdata', JSON.stringify(localUserData));
    reset('');
    notify();
  };

  const onCancel = () => {
    reset('');
  };

  return (
    <div>
      <div className={classes.formcontent}>
        <Stack spacing={2}>
          <div className={classes.popupheader}>
            <p className={classes.formheading}>User Details Form</p>
          </div>
          <div className={classes.formbody}>
            <form name="userdataform" onSubmit={handleSubmit((e) => onSubmit(e))}>
              <p className={classes.formSubHeading}>Personal Details: </p>
              <Stack direction="row" spacing={2}>
                <TextField
                  placeholder="Name"
                  variant="outlined"
                  {...register('name', {
                    required: 'Name is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Please Enter a Valid Name',
                    },
                  })}
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
                <TextField
                  placeholder="UserName"
                  variant="outlined"
                  {...register('username', {
                    required: 'Username is Required',
                  })}
                  error={Boolean(errors.username)}
                  helperText={errors.username?.message}
                />
                <TextField
                  placeholder="Email"
                  variant="outlined"
                  {...register('email', {
                    required: 'Email is Required',
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'Enter a Valid email address',
                    },
                  })}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              </Stack>
              <br />
              <Stack direction="row" spacing={2}>
                <TextField
                  placeholder="Phone Number"
                  variant="outlined"
                  {...register('phone', {
                    required: 'Phone Number is Required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Enter a Valid Phone Number',
                    },
                  })}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone?.message}
                />
                <TextField
                  placeholder="Website"
                  variant="outlined"
                  {...register('website', {
                    required: 'Web address is Required',
                    pattern: {
                      value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                      message: 'Enter a Valid Web Url',
                    },
                  })}
                  error={Boolean(errors.website)}
                  helperText={errors.website?.message}
                />
              </Stack>
              <p className={classes.formSubHeading}>Company: </p>
              <Stack direction="row" spacing={2}>
                <TextField
                  placeholder="Name"
                  variant="outlined"
                  {...register('company.name', {
                    required: 'Company Name is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid name',
                    },
                  })}
                  error={Boolean(errors.company?.name)}
                  helperText={errors.company?.name?.message}
                />
                <TextField
                  placeholder="Bs"
                  variant="outlined"
                  {...register('company.bs', {
                    required: 'Bs is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid bs.',
                    },
                  })}
                  error={Boolean(errors.company?.bs)}
                  helperText={errors.company?.bs?.message}
                />
                <TextField
                  placeholder="Catch Phrase"
                  variant="outlined"
                  {...register('company.catchphrase', {
                    required: 'Catch Phrase is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid Catch Phrase',
                    },
                  })}
                  error={Boolean(errors.company?.catchphrase)}
                  helperText={errors.company?.catchphrase?.message}
                />
              </Stack>
              <p className={classes.formSubHeading}>Address: </p>
              <Stack direction="row" spacing={2}>
                <TextField
                  placeholder="Street"
                  variant="outlined"
                  {...register('address.street', {
                    required: 'Street is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid street',
                    },
                  })}
                  error={Boolean(errors.address?.street)}
                  helperText={errors.address?.street?.message}
                />
                <TextField
                  placeholder="Suite"
                  variant="outlined"
                  {...register('address.suite', {
                    required: 'Suite is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid suite.',
                    },
                  })}
                  error={Boolean(errors.address?.suite)}
                  helperText={errors.address?.suite?.message}

                />
                <TextField
                  placeholder="City"
                  variant="outlined"
                  {...register('address.city', {
                    required: 'City is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid city.',
                    },
                  })}
                  error={Boolean(errors.address?.city)}
                  helperText={errors.address?.city?.message}
                />
              </Stack>
              <br />
              <Stack direction="row" spacing={2}>
                <TextField
                  placeholder="Zipcode"
                  variant="outlined"
                  {...register('address.zipcode', {
                    required: 'Zipcode is Required',
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: 'Enter a valid zipcode.',
                    },
                  })}
                  error={Boolean(errors.address?.zipcode)}
                  helperText={errors.address?.zipcode?.message}
                />
              </Stack>

              <p className={classes.formSubHeading}>Geo: </p>
              <Stack direction="row" spacing={2}>
                <TextField
                  placeholder="lat"
                  variant="outlined"
                  {...register('address.geo.lat', {
                    required: 'Latitude is Required',
                    pattern: {
                      value: /^\d*\.?\d*$/,
                      message: 'Enter a valid geo latitude.',
                    },
                  })}
                  error={Boolean(errors.address?.geo?.lat)}
                  helperText={errors.address?.geo?.lat?.message}
                />
                <TextField
                  placeholder="lng"
                  variant="outlined"
                  {...register('address.geo.lng', {
                    required: 'Longitude is Required',
                    pattern: {
                      value: /^\d*\.?\d*$/,
                      message: 'Enter a valid geo longitude.',
                    },
                  })}
                  error={Boolean(errors.address?.geo?.lng)}
                  helperText={errors.address?.geo?.lng?.message}
                />
              </Stack>
              <div className={classes.buttonsContainer}>
                <Button type="submit" variant="contained" className={classes.submitBtn}>Submit</Button>
                <Button variant="outlined" className={classes.cancleBtn} onClick={onCancel}>Reset</Button>
              </div>
            </form>
          </div>
        </Stack>
        <ToastContainer className={classes.Toastify__toast} />
      </div>
    </div>
  );
}

export default Form;