import React, { useState } from 'react';


import './css/Login.scss'
import { makeStyles } from '@material-ui/core/styles';


//form Import
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
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
  passwordField:{
    marginTop:theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    minWidth:'100%'
  },
}));

function Login() {
  const classes = useStyles();
  const [reg,setReg] = useState(false)
  const [showPassword,setShowPassword] = useState(true)
  const [loginForm , setLoginForm] = useState({
    root: {
      width: '100%',
    },
    formData:{
      email:'',
      password:''
    },
    formError:{
      emailErr:"Wrong email",
      passwordErr:"Wrong password"
    },
    formValid:{
      emailValid:false,
      passwordValid:false
    }
  })
  const handleClickShowPassword = () => {
    setShowPassword((value)=> !value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handelChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    // validateField(name,value)
    var data = loginForm.formData
    data[name]=value
    setLoginForm(data);
  }
    return (
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <img src="undraw_remotely_2j6y.svg" alt="Image" class="img-fluid"/>
              </div>
              {!reg?
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
                                      {...(!loginForm.formValid.emailValid && {error: true , helperText: loginForm.formError.emailErr})}
                                      margin="normal"
                                      variant="outlined"
                                      className={classes.textField}
                                  />
                              </div>
                              <div className="col-12">
                              <FormControl 
                                    className={classes.passwordField} 
                                    variant="outlined"
                                    {...(!loginForm.formValid.passwordValid && {error: true})}
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
                                    <input type="checkbox" checked="checked"/>
                                    <div class="control__indicator"></div>
                                    </label>
                                    <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span> 
                                </div>

                                <input type="submit" value="Log In" class="btn btn-block btn-primary" onClick={(e)=>{e.preventDefault()}}/>
                                <span class="ml-auto"><button class="btn btn-link" onClick={(e)=>{e.preventDefault(); setReg(true)}}>Create a new Account.</button></span> 
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
                                    {/* <label for="username">Email</label> */}
                                    <input type="email" class="form-control" id="username" placeholder="email"/>

                                </div>
                                <div class="form-group last mb-4">
                                    {/* <label for="password">Password</label> */}
                                    <input type="password" class="form-control" id="password" placeholder="Password"/>
                                    
                                </div>
                            
                                <div class="d-flex mb-5 align-items-center">
                                    <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                                    <input type="checkbox" checked="checked"/>
                                    <div class="control__indicator"></div>
                                    </label>
                                </div>

                                <input type="submit" value="Register" class="btn btn-block btn-primary"/>
                                <span class="ml-auto"><button class="btn btn-link" onClick={(event)=>{event.preventDefault();setReg(false)}}>Already have an Account.</button></span> 
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
