import React, { useState } from 'react';


import './css/Login.scss'
import { makeStyles } from '@material-ui/core/styles';
import Register from './Register';

//form Import
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { Select } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

// password import
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',

    height:'50%',
    minWidth:'100%'
  },
  passwordField: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    minWidth: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Login(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(true)
  const [loginForm, setLoginForm] = useState({
    
    formData: {
      email: '',
      password: '',
    },
    formError: {
      emailErr: "Wrong email",
      passwordErr: "Wrong password",
    },
    formValid: {
      emailValid: false,
      passwordValid: false,
    }
  })
  const handleClickShowPassword = () => {
    setShowPassword((value) => !value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit=(event)=>{
    console.log(loginForm.formData);
    event.preventDefault();
  }
  const handelChange = (event) => {
    
  }
  
  const validateField = (fieldName, value) => {
    var message;


    switch (fieldName) {
      case 'email':
        let emailRegex = new RegExp(/^[A-z][A-z0-9.]+@[a-z]+\.[a-z]{2,3}$/);
        value === "" ? message = "Please enter your email id" : emailRegex.test(value) ? message = "" : message = "Email id format is wrong";
        break;

      case "password":
        let passRegex = new RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*%&])(?=.*[0-9])(?=.*[a-z]).{7,20}$/);
        value === "" ? message = "Please enter your password" : passRegex.test(value) ? message = "" : message = "At least one capital & small letter,one number,one special character"
        break
      default:
        break;
    } 
  }

  
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="undraw_remotely_2j6y.svg" alt="Image" className="img-fluid" />
          </div>
          
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3>Sign In</h3>
                    <p className="mb-4">Please Login to your account with correct with correct email and password .</p>
                  </div>
                  <form className={classes.root}>
                    <div className='col-12'>
                      <TextField
                        label="Email"
                        id="schoolName"
                        name='email'
                        //defaultValue={registrationData.schoolName}
                        onChange={handelChange}
                        {...(!loginForm.formValid.emailValid && { error: true, helperText: loginForm.formError.emailErr })}
                        margin="normal"
                        variant="outlined"
                        className={classes.textField}
                      />
                    </div>
                    <div className="col-12">
                      <FormControl
                        className={classes.passwordField}
                        variant="outlined"
                        {...(!loginForm.formValid.passwordValid && { error: true })}
                      >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                          id="password"
                          name="password"
                          onChange={handelChange}
                          defaultValue=''
                          type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          }
                          labelWidth={70}
                        />
                        {!loginForm.formValid.passwordValid &&
                          <FormHelperText>{loginForm.formError.passwordErr}</FormHelperText>
                        }

                      </FormControl>
                    </div>


                    <div className="d-flex mb-5 align-items-center">
                      <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                    </div>

                    <input type="submit" value="Log In" className="btn btn-block btn-primary" onClick={(e) => { e.preventDefault() }} />
                    <span className="ml-auto"><button className="btn btn-link" onClick={(e) => { e.preventDefault();props.history.push('/register')}}>Create a new Account.</button></span>
                  </form>
                </div>
              </div>

            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Login;
