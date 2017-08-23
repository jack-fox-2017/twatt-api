'use strict'

var {OAuth} = require('oauth');

var oauth = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'GANUKKBWdKUZ5pEK6qAqGlBIE',
  'FSM6oyFt9Lp5VtJF0yEC09cqTDQ1ZNoMpUOnMmeMQK0l8kQjbD',
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = {
  general: function (req,res) {
    oauth.get(
       'https://api.twitter.com/1.1/trends/place.json?id=23424977',
       '773108859581837312-Lup3QZ5aBTs6WWTsGV8RBcbBbmSpmvN', //test user token
       't1ahvndghBqNVkIq3sBZUAzfuqU7qLFWnxghCxNlc0QYA', //test user secret
       function (e, data, respond){
         if (e) console.error(e);
         res.send(data);
    });
  },
  search: function (req,res) {
    oauth.get(
       `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}`,
       '773108859581837312-Lup3QZ5aBTs6WWTsGV8RBcbBbmSpmvN', //test user token
       't1ahvndghBqNVkIq3sBZUAzfuqU7qLFWnxghCxNlc0QYA', //test user secret
       function (e, data, respond){
         if (e) console.error(e);
         res.send(data);
    });
  },
  hometimeline: function (req,res) {
    oauth.get(
       `https://api.twitter.com/1.1/statuses/home_timeline.json`,
       '773108859581837312-Lup3QZ5aBTs6WWTsGV8RBcbBbmSpmvN', //test user token
       't1ahvndghBqNVkIq3sBZUAzfuqU7qLFWnxghCxNlc0QYA', //test user secret
       function (e, data, respond){
         if (e) console.error(e);
         res.send(data);
    });
  },
  mytimeline: function (req,res) {
    oauth.get(
       `https://api.twitter.com/1.1/statuses/user_timeline.json`,
       '773108859581837312-Lup3QZ5aBTs6WWTsGV8RBcbBbmSpmvN', //test user token
       't1ahvndghBqNVkIq3sBZUAzfuqU7qLFWnxghCxNlc0QYA', //test user secret
       function (e, data, respond){
         if (e) console.error(e);
         res.send(data);
    });
  },
  posttweet: function (req,res) {
    oauth.post(
       `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.status}`,
       '773108859581837312-Lup3QZ5aBTs6WWTsGV8RBcbBbmSpmvN', //test user token
       't1ahvndghBqNVkIq3sBZUAzfuqU7qLFWnxghCxNlc0QYA', //test user secret
       req.body.status,
       'cc',
       function (e, data, respond){
         if (e) console.error(e);
         res.send(data);
    });
  }
};
