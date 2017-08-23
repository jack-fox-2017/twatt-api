var OAuth = require('oauth');
require('dotenv').config()


var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.SECRET_KEY,
      process.env.SECRET_TOKEN,
      '1.0A',
      null,
      'HMAC-SHA1'
);

var getDataTwit = (req, res) => {
  oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      process.env.ACCESS_TOKEN, //test user token
      process.env.ACCESS_SECRET, //test user secret
      (err, data) => {
        if (!err) {
          res.send(data)
        } else {
          res.send(err)
        }
      })
}

var postTwit = (req, res) => {
  oauth.post(
  "https://api.twitter.com/1.1/statuses/update.json",
  process.env.ACCESS_TOKEN,
  process.env.ACCESS_SECRET,
  {"status":req.body.text},
  (err, data) => {
    if (!err) {
      res.send(data)
    } else {
      res.send(err)
    }
  });
}

var searchTweet = (req, res) => {
  var search = req.query.q
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_SECRET, //test user secret
    (err, data) => {
      if (!err) {
        res.send(data)
      } else {
        res.send(err)
      }
    })
}

var timeLine = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_SECRET,
    (err, data) => {
      if (!err) {
        res.send(data)
      } else {
        res.send(err)
      }
    }
  )
}

module.exports = {
  getDataTwit,
  searchTweet,
  postTwit,
  timeLine
};
