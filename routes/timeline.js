"use strict"
const express = require('express');
const router = express.Router()
const controllers = require('../controllers/timeline')
const OAuth = require('oauth')


let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'wzEP7J7jJIutXpbEcC9ztkfrs', //consumer key - API key
  'pd9p9XMOYs07euJZDZu0Bj5g9EfhTTmsVoG0zTJYGTd1m4pcms', //consumer secret
  '1.0A',
  null,
  'HMAC-SHA1'
);

router.get('/', controllers.show)

router.post('/', controllers.posting)

router.get('/search', controllers.search)


module.exports = router;
