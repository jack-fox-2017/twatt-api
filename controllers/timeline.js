"use strict"

const OAuth = require('oauth');
require('dotenv').config();

let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY, //consumer key - API key
  process.env.CONSUMER_SECRET, //consumer secret
  '1.0A',
  null,
  'HMAC-SHA1'
);

let show = (req, res) => {
oauth.get(
  'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=metamorphega&count=2',
  process.env.ACCESS_TOKEN, //access_token
  process.env.ACCESS_TOKEN_SECRET, //access_token secret
  function(e, data, response){
    if(!e) res.send(data)
    else res.status(500).send(e)
  });
}

let posting = (req, res) => {
  oauth.post(
	`https://api.twitter.com/1.1/statuses/update.json?status=${req.body.value}`,
  process.env.ACCESS_TOKEN, //access_token
  process.env.ACCESS_TOKEN_SECRET,
	'status updated',
	'text', //emang teks gini aja
	(e, data, response) => {
    if(!e) res.send(data)
    else res.status(500).send(e)
	});
}


let search = (req, res) => {
  oauth.get(
	`https://api.twitter.com/1.1/search/tweets.json?q=${req.query.key}`,
  process.env.ACCESS_TOKEN, //access_token
  process.env.ACCESS_TOKEN_SECRET,
	(e, data) => {
    if(!e) res.send(data)
    else res.status(500).send(e)
	});
}

module.exports = {
  show,
  posting,
  search
};
