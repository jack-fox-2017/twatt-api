require('dotenv').config()
const {OAuth} = require('oauth');

const oauth = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.API_KEY, process.env.API_SECRET,
  '1.0A', null, 'HMAC-SHA1'
);

module.exports = {
  search: (req, res) => {
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.q}`,
      process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET,
      (err, data) => {
        if (err) res.send(err)
        else res.send(JSON.parse(data))
      }
    )
  },

  timeline: (req, res) => {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET,
      (err, data) => {
        if (err) res.send(err)
        else res.send(JSON.parse(data))
      }
    )
  },

  myTimeline: (req, res) => {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json',
      process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET,
      (err, data) => {
        if (err) res.send(err)
        else res.send(JSON.parse(data))
      }
    )
  },

  tweet: (req, res) => {
    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json`,
      process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET,
      {status: req.body.status},
      (err, data) => {
        if (err) res.send(err)
        else res.send(JSON.parse(data))
      }
    )
  }
}
