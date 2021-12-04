import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
//import './css/Login.scss'
import { makeStyles } from '@material-ui/core/styles';
//form Import
import InputLabel from '@material-ui/core/InputLabel';
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


function Register(props) {
    const classes = useStyles();
    const [response,setResponse] = useState({
        valid:true,
        errorMessage:''
    })
    const [registrationForm, setRegistrationForm] = useState({
        root: {
            width: '100%',
        },
        registrationFormData: {
            email: '',
            password: '',
            userName: '',
            mobileNumber: '',
            userType: '',
            passwordConfirmation: '',

        },
        formError: {
            email: '',
            password: '',
            userName: '',
            mobileNumber: '',
            userType: '',
            passwordConfirmation: '',
        },
        formValid: {
            email: false,
            password: false,
            userName: false,
            mobileNumber: false,
            userType: false,
            passwordConfirmation: false,
        }
    })
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
        var FormData = registrationForm.registrationFormData
        var URL = `http://localhost:3000/Register`
        var obj = {
            userProfile:{
                userName:FormData.userName,
                mobileNo:FormData.mobileNumber,
                userType:FormData.userType
            },
            userCred:{
                email:FormData.email,
                password: FormData.password
            }
        }
        //console.log(obj);
        // axios.post(URL,obj).then(Responsedata=>{
        //     console.log(Responsedata);
        // }).catch(err=>{
        //     console.log("err"+err);
        // })
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
                if (value === "") {
                    message = "Please enter your Name"
                }
                else if (!(value.match(/^[a-zA-z]+([\s][a-zA-Z]+)*$/))) {
                    message = "Only alphabets. Should not start and end with space"
                }
                else message = ""
                break

            case "mobileNumber":
                if (value === "") {
                    message = "Please Enter Your Mobile Number"
                }
                else if (!(String(value)[0] !== "0")) {
                    message = "Should not Start With 0"
                }
                else if (!(value.length === 10)) {
                    message = "Mobile Number should be 10 digits"
                }
                else message = ""
                break
            case "passwordConfirmation":
                if (value === "") {
                    message = "Field required !"
                }
                else if (value !== registrationForm.registrationFormData.password) {
                    message = "Password doesn't match"
                }
                else message = ""
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
            <div className="container register-container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="undraw_remotely_2j6y.svg" alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-md-6 contents">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mb-4 text-center">
                                    <h3>Sign Up</h3>
                                    <p className="mb-4">Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.</p>
                                </div>
                                <form onSubmit={handleSubmit} className={classes.root}>
                                    <div className="form-group first">
                                        <FormControl margin="normal" required fullWidth variant="outlined"
                                            {...(registrationForm.formValid.userName && { error: true })}
                                        >
                                            <InputLabel htmlFor="userName">UserName</InputLabel>
                                            <OutlinedInput autoComplete="userName" autoFocus
                                                id="userName" type="text" name="userName"
                                                defaultValue={registrationForm.registrationFormData.userName}
                                                onChange={handleChange}
                                                labelWidth={90}
                                            />
                                            {registrationForm.formValid.userName &&
                                                <FormHelperText>{registrationForm.formError.userName}</FormHelperText>
                                            }
                                        </FormControl>

                                        <FormControl margin="normal" required fullWidth variant="outlined"
                                            {...(registrationForm.formValid.mobileNumber && { error: true })}
                                        >
                                            <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
                                            <OutlinedInput name="mobileNumber" type="number"
                                                id="mobileNumber"
                                                autoComplete="mobile-number"
                                                onChange={handleChange}
                                                labelWidth={115}
                                                defaultValue={registrationForm.registrationFormData.mobileNumber}
                                            />
                                            {registrationForm.formValid.mobileNumber &&
                                                <FormHelperText>{registrationForm.formError.mobileNumber}</FormHelperText>
                                            }
                                        </FormControl>

                                        <FormControl margin="normal" required fullWidth variant="outlined">
                                            <InputLabel id="userType">User Type</InputLabel>
                                            <Select
                                                labelId="userType"
                                                id="userType"
                                                defaultValue=""
                                                name="userType"
                                                onChange={handleChange}
                                                labelWidth={80}
                                            >
                                                <MenuItem value={''}></MenuItem>
                                                <MenuItem value={'User'}>User</MenuItem>
                                                <MenuItem value={'Admin'}>Admin</MenuItem>

                                            </Select>

                                        </FormControl>

                                        <FormControl margin="normal" required fullWidth variant="outlined"
                                            {...(registrationForm.formValid.email && { error: true })}
                                        >
                                            <InputLabel htmlFor="email">Email Address</InputLabel>
                                            <OutlinedInput name="email" type="email"
                                                id="email"
                                                autoComplete="email-address"
                                                onChange={handleChange}
                                                defaultValue={registrationForm.registrationFormData.email}
                                                labelWidth={110}
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
                                       
                                        <FormControl margin="normal" required fullWidth variant="outlined"
                                            {...(registrationForm.formValid.passwordConfirmation && { error: true })}
                                        >
                                            <InputLabel htmlFor="passwordConfirmation">Confirm Password</InputLabel>
                                            <OutlinedInput name="passwordConfirmation" type="password"
                                                id="passwordConfirmation"
                                                autoComplete="passwordConfirmation"
                                                onChange={handleChange}
                                                defaultValue={registrationForm.registrationFormData.passwordConfirmation}
                                                labelWidth={140}
                                            />
                                            {registrationForm.formValid.passwordConfirmation &&
                                                <FormHelperText>{registrationForm.formError.passwordConfirmation}</FormHelperText>
                                            }
                                        </FormControl>
                                    </div>

                                    <input type="submit" value="Register" className="btn btn-block btn-primary"
                                        onClick={handleSubmit}
                                        disabled={!(!registrationForm.formValid.userName && !registrationForm.formValid.mobileNumber && !registrationForm.formValid.password && !registrationForm.formValid.email)}
                                    />
                                    <span className="ml-auto"><button className="btn btn-link"onClick={()=>{props.history.push('/login')}} >Already have an Account.</button></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Register;