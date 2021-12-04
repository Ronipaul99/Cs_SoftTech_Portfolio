import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
//import './css/Login.scss'
import { makeStyles } from '@material-ui/core/styles';
//form Import
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { OutlinedInput } from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',

        height: '50%',
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


function Login(props) {
    const classes = useStyles();
    const [registrationForm, setRegistrationForm] = useState({
        registrationFormData: {
            Email: '',
            password: '',
        },
        formError: {
            email: '',
            password: '',
        },
        formValid: {
            email: false,
            password: false,
        }
    })
    const [errStatus , setErrStatus] = useState(null)
    const [err , setErr] = useState(false)
    const [Response , setResponse] = useState(null)

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        var data = registrationForm.registrationFormData;
        data[event.target.name] = value
        var reg = registrationForm
        reg.registrationFormData = data;
        setRegistrationForm(reg)
        validateField(name, value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const URL = "http://localhost:3000/login"
        axios.post(URL , registrationForm.registrationFormData).then(response=>{
           // console.log(response.data);
            setResponse(response.data)
            setErr(false)
        }).catch(err=>{
            const Err = err.message.split(" ")
            setErrStatus(parseInt(Err[Err.length-1]))
            setErr(true)
        })
        console.log(registrationForm.registrationFormData);
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
        
        //Form err message set
        var err = registrationForm.formError;
        err[fieldName] = message
        var register = registrationForm
        register.formError = err;
        setRegistrationForm(register)
        // console.log(registrationForm.formError)

        //FormValid status set
        if (message === "") {
            setRegistrationForm({
                ...registrationForm, formValid: {
                    [fieldName]: false
                }
            })
        }
        else {
            setRegistrationForm({
                ...registrationForm, formValid: {
                    [fieldName]: true
                }
            })
        }

    }

    return (
        <div className="content">
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="undraw_remotely_2j6y.svg" alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-md-6 contents">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mb-4 text-center">
                                    <h3>Sign In</h3>
                                    <p className="mb-4 ">Please Login with your correct email and password</p>
                                </div>
                                <div>
                                    {err && 
                                     <small className="text-danger">
                                         {errStatus=== 401 && "Wrong Email or Password"}
                                         {errStatus === 402 && "Account Not Found"}
                                     </small>
                                    }
                                </div>
                                <form onSubmit={handleSubmit} className={classes.root}>
                                    <div className="form-group first">
                                        
                                        <FormControl margin="normal" required fullWidth variant="outlined"
                                            {...(registrationForm.formValid.email && { error: true })}
                                        >
                                            <InputLabel htmlFor="email">Email Address</InputLabel>
                                            <OutlinedInput name="Email" type="email"
                                                id="Email"
                                                autoComplete="email-address"
                                                onChange={handleChange}
                                                defaultValue={registrationForm.registrationFormData.email}
                                                labelWidth={11}
                                            />
                                            {registrationForm.formValid.email &&
                                                <FormHelperText>{registrationForm.formError.email}</FormHelperText>
                                            }
                                        </FormControl>

                                        <FormControl margin="normal" required fullWidth variant="outlined"
                                            {...(registrationForm.formValid.password && { error: true })}
                                        >
                                            <InputLabel htmlFor="password">Password</InputLabel>
                                            <OutlinedInput name="password" type="password"
                                                id="password"
                                                autoComplete="password"
                                                onChange={handleChange}
                                                defaultValue={registrationForm.registrationFormData.password}
                                                labelWidth={80}
                                            />
                                            {registrationForm.formValid.password &&
                                                <FormHelperText>{registrationForm.formError.password}</FormHelperText>
                                            }
                                        </FormControl>
                                       
                                    </div>
                                    <div className="d-flex mb-5 align-items-center">
                                      <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                                    </div>
                                    
                                    <input type="submit" value="Login" className="btn btn-block btn-primary"
                                        onClick={handleSubmit}
                                        disabled={!(!registrationForm.formValid.password && !registrationForm.formValid.email)}
                                    />
                                    <span className="ml-auto"><button className="btn btn-link"onClick={()=>{props.history.push('/register')}} >Create an Account.</button></span>
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
{/* <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment> */}