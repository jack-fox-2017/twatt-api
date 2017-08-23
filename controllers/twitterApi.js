'use strict'
var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.SECRET_KEY,
  '1.0A',
  null,
  'HMAC-SHA1'
);

exports.index = (req,res) => {
  res.send('berhasil')
}


exports.keyword = (req,res) => {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.keyword}`,
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_TOKEN_SECRET, //test user secret
    function (e, data, respond){
      if (e) console.error(e);
      res.send(data)
  });
}

exports.timeline = (req,res) =>{
  oauth.get(
    `https://api.twitter.com/1.1/statuses/home_timeline.json`,
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_TOKEN_SECRET, //test user secret
    function (e, data, respond){
      if (e) console.error(e);
      res.json(data)
  });
}

exports.mytimeline = (req,res) =>{
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=79164479&count=20`,
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_TOKEN_SECRET, //test user secret
    function (e, data, respond){
      if (e) console.error(e);
      res.send(data)
  });
}

exports.updateStatus = (req,res) => {
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json`,
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_TOKEN_SECRET, //test user secret
    {status: `${req.body.update}`},
    function (e, data, respond){
      if (e) console.error(e);
      res.send(data)
  });

}
