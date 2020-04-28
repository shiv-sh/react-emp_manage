const express = require('express');
const bodyParser = require("body-parser");
const router = require('./routes/routing');
const myErrorLogger = require('./utilities/errorlogger')
const myRequestLogger = require('./utilities/requestlogger')
const mongoose = require('mongoose');
require('dotenv/config');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(myRequestLogger);
app.use('/', router);
app.use(myErrorLogger);

app.listen(4000);
console.log("Server listening in port 4000");