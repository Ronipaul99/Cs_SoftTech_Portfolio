import React, { useState } from 'react';


import './css/Login.scss'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//card Import
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
//form Import
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// password import
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Accordin import
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

// Dialog imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    minWidth: '100%'
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

function Login() {
  const classes = useStyles();
  const [reg, setReg] = useState(false)
  const [showPassword, setShowPassword] = useState(true)
  const [loginForm, setLoginForm] = useState({
    root: {
      width: '100%',
    },
    formData: {
      email: '',
      password: '',


    },
    registrationFormData: {
      email: '',
      password: '',
      userName:'',
      mobileNumber:'',
      userType:''

    },
    formError: {
      emailErr: "Wrong email",
      passwordErr: "Wrong password",
      email: '',
      password: '',
      userName:'',
      mobileNumber:'',
      userType:''
    },
    formValid: {
      emailValid: false,
      passwordValid: false,
      email: false,
      password: false,
      userName:false,
      mobileNumber:false,
      userType:false
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
    const name = event.target.name
    const value = event.target.value
    // validateField(name,value)
    var data = loginForm.formData
    setLoginForm({...loginForm,formData:{
      [name]:value
    }})
    validateField(name, value);
    // data[name] = value
    // setLoginForm(data);
  }
  const handleRegistration=(event)=>{
    const name = event.target.name
    const value = event.target.value
    // validateField(name,value)
    // var data = loginForm.formData
    setLoginForm({...loginForm,registrationFormData:{
      [name]:value
    }})
    validateField(name, value);
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
    
      case "userName":
        if(value===""){
          message="Please enter your Name"
        }
        else if(!(value.match(/^[a-zA-z]+([\s][a-zA-Z]+)*$/))){
          message="Only alphabets. Should not start and end with space"
        }
        else message = ""
        break

      case "mobileNumber":
        if(value===""){
          message="Please Enter Your Mobile Number"
        }
        else if(!( String(value)[0]!="0")){
          message="Should not Start With 0"
        }
        else if(!(value.length==10)){
          message="Mobile Number should be 10 digits"
        }
        else message = ""
        break

      default:
        break;
    }
    //Form err message set
    // console.log(fieldName,message)
    var err=loginForm.formError;
    err[fieldName]=message
    var login=loginForm
    login.formError=err;
    setLoginForm(login)
    // console.log(loginForm.formError)
   
    //FormValid status set
    if(message==""){
      setLoginForm({...loginForm,formValid:{
        [fieldName]:false
      }})
    }
    else{
      setLoginForm({...loginForm,formValid:{
        [fieldName]:true
      }})
    }
    
  }
  return (
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="undraw_remotely_2j6y.svg" alt="Image" class="img-fluid" />
          </div>
          {!reg ?
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="mb-4">
                    <h3>Sign In</h3>
                    <p class="mb-4">Please Login to your account with correct with correct email and password .</p>
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


                    <div class="d-flex mb-5 align-items-center">
                      <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                        <input type="checkbox" checked="checked" />
                        <div class="control__indicator"></div>
                      </label>
                      <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
                    </div>

                    <input type="submit" value="Log In" class="btn btn-block btn-primary" onClick={(e) => { e.preventDefault() }} />
                    <span class="ml-auto"><button class="btn btn-link" onClick={(e) => { e.preventDefault(); setReg(true) }}>Create a new Account.</button></span>
                  </form>
                </div>
              </div>

            </div>
            :
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="mb-4">
                    <h3>Sign Up</h3>
                    <p class="mb-4">Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.</p>
                  </div>
                  <form>
                    <div class="form-group first">
                      <FormControl margin="normal" required fullWidth 
                      {...(loginForm.formValid.userName && { error: true })}
                      >
                        <InputLabel htmlFor="userName">UserName</InputLabel>
                        <Input autoComplete="userName" autoFocus
                          id="userName" type="text" name="userName"
                          value={loginForm.formData.userName}
                          onChange={handleRegistration}
                        />
                        {loginForm.formValid.userName &&
                          <FormHelperText>{loginForm.formError.userName}</FormHelperText>
                        }
                      </FormControl>

                      <FormControl margin="normal" required fullWidth
                      {...(loginForm.formValid.mobileNumber && { error: true })}
                      >
                        <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
                        <Input name="mobileNumber" type="number"
                          id="mobileNumber"
                          autoComplete="mobile-number"
                          onChange={handleRegistration}
                          value={loginForm.formData.mobileNumber}
                           />
                           {loginForm.formValid.mobileNumber &&
                          <FormHelperText>{loginForm.formError.mobileNumber}</FormHelperText>
                        }
                      </FormControl>

                      <FormControl margin="normal" required fullWidth >
                        <InputLabel id="userType">User Type</InputLabel>
                        <Select
                          labelId="userType"
                          id="userType"
                          value={loginForm.formData.userType}
                          renderValue={(value) => `${value}`}
                        >

                          <MenuItem value={'User'}>User</MenuItem>
                          <MenuItem value={'Admin'}>Admin</MenuItem>
                          
                        </Select>

                      </FormControl>

                      <FormControl margin="normal" required fullWidth
                      {...(loginForm.formValid.email && { error: true, helperText: loginForm.formError.email })}
                      >
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input name="email" type="email"
                          id="email"
                          autoComplete="email-address"
                          onChange={handleRegistration}
                          value={loginForm.formData.email}
                           />
                      </FormControl>

                      <FormControl margin="normal" required fullWidth
                      {...(loginForm.formValid.password && { error: true })}
                      >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password"
                          id="password"
                          autoComplete="password"
                          onChange={handleRegistration}
                          value={loginForm.formData.password}
                           />
                           {loginForm.formValid.password &&
                          <FormHelperText>{loginForm.formError.password}</FormHelperText>
                        }
                      </FormControl>
                    </div>



                    <input type="submit" value="Register"  class="btn btn-block btn-primary" 
                      disabled={!(!loginForm.formValid.userName && !loginForm.formValid.mobileNumber && !loginForm.formValid.password && !loginForm.formValid.email)}
                    />
                    <span class="ml-auto"><button class="btn btn-link" onClick={(event) => { event.preventDefault();handleSubmit(); setReg(false) }}>Already have an Account.</button></span>
                  </form>
                </div>
              </div>
            </div>

          }
        </div>
      </div>
    </div>
  );
}

export default Login;
