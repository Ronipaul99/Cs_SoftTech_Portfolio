require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors")
const userRouter = require('./Routes/setup')
const myErrorLogger = require('./Utilities/ErrorLogger');
const myRequestLogger = require('./Utilities/RequestLogger');

const app = express()

app.use(cors())
app.use(bodyParser.json());

//Request logger 
app.use(myRequestLogger);

app.use('/',userRouter)

//Error Logger 
app.use(myErrorLogger);
module.exports = app;