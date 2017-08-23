const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var twit = require('./router/twit')
app.use('/twitter', twitt)

// var url = 'mongodb://localhost/library';
// mongoose.connect(url);
// //Get the default connection
// var db = mongoose.connection;
// //get connect and notification of connection errors
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(3000)
