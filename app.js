'use strict'

// const
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));

// routes
const twatt = require('./routes/twatt');

app.get('/', (req, res) => res.send('Index Page'));
app.use('/twatt', twatt)


app.listen(3000, () => console.log('Listening...'))