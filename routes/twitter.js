const express = require('express');
const router = express.Router();
require('dotenv').config()
const {OAuth} = require('oauth');

const oauth = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.API_KEY,
  process.env.API_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);
/* GET users listing. */
router.get('/search/:q', (req, res) => {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.q}`,
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_TOKEN_SECRET, //test user secret
    (err, data) => {
      if (err) res.send(err)
      else res.send(JSON.parse(data))
    }
  )
})

router.get('/timeline', (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_SECRET,
    (err, data) => {
      if (err) res.send(err)
      else res.send(JSON.parse(data))
    }
  )
})

router.get('/my-timeline', (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json',
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_SECRET,
    (err, data) => {
      if (err) res.send(err)
      else res.send(JSON.parse(data))
    }
  )
})

router.post('/tweet', (req, res) => {
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json`,
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_SECRET,
    {status: req.body.status},
    (err, data) => {
      if (err) res.send(err)
      else res.send(JSON.parse(data))
    }
  )
})

console.log(oauth);

module.exports = router;
