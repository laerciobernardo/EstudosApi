const express = require('express');
const bodyparser = require('body-parser');
const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: true}));

//parse application/json
app.use(bodyparser.json());


module.exports = app;