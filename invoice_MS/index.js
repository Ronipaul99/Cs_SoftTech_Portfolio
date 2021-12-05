const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const homeRoutes = require('./routes/home-routes');
const bodyParser = require('body-parser');
var cors = require('cors')
const fileUpload = require('express-fileupload');


// const cors = require("cors")
const app = express();
app.use(cors())
app.use(fileUpload());
// app.use(cors())
app.use(bodyParser.json());

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', express.static(path.join(__dirname, 'docs')));
app.use('/',homeRoutes);


app.listen(3000, () => console.log('App is listening on url http://localhost:3000/yourRoutePath'));