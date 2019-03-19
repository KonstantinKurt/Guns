const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const db = require('./connections/dbConnection');
const recieverRouter = require('./routes/recieverRouter.js');
const componentRouter = require('./routes/componentRouter.js')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(__dirname + '/images'));

app.use('/', recieverRouter);
app.use('/', componentRouter);



app.listen(process.env.PORT, () => {
    console.log(`Server runs on http://localhost:'  ${process.env.PORT}  '; Ctrl+C for exit `);
    db();
});