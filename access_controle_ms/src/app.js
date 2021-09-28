const express = require('express')
const accessRouter = require('./Routes/route1')
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express()


app.use(cors())
app.use(bodyParser.json());
app.use('/',accessRouter)

module.exports = app;