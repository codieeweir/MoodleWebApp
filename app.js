const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config({ path: './config.env' });
const session = require('express-session');
const router = require('./routes/myroutes');
const path = require('path');
//const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'mysecretstring1234',
    resave: false,
    saveUninitialized: false
    }));

app.use('/', router);
app.use(morgan('tiny'));

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
