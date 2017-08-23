const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const OAuth = require('oauth')
const oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'UmYlMwmhQQr50YWtGGfTq3xbj', //your application consumer key
      'veVnVE7r9cYnOBBXFiZjn6jdqvw6CrsBhYFhYCtPtGoMG9zHCL', //your application secret
      '1.0A',
      null,
      'HMAC-SHA1'
    )

app.get('/', (req, res) => {
  res.send('tes')
})

app.get('/twitter', (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.ACCESS_TOKEN, //access token
    process.env.ACCESS_TOKEN_SECRET, //acces token secret secret
    function (e, data, response){
      if (e) console.error(e);
      res.send(data)
  })
})

app.post('/twitter', (req, res) => {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.hashtag}`,
    process.env.ACCESS_TOKEN, //access token
    process.env.ACCESS_TOKEN_SECRET, //acces token secret secret
    function (e, data, response){
      if (e) console.error(e);
      res.send(data)
  })
})

app.post('/twitter/post', (req, res) => {
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.status}`,
    process.env.ACCESS_TOKEN, //access token
    process.env.ACCESS_TOKEN_SECRET, //acces token secret secret
    req.body.status,
    'text',
    function (e, data, response){
      if (e) console.error(e);
      res.send(`status updated: ${data}`)
  })
})


app.listen(3000)
