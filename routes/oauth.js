var express = require('express');
var router = express.Router();
var oauth = require('../controllers/oauth')

/* GET users listing. */
router.get('/', oauth.getDataTwit)
router.get('/search', oauth.searchTweet)
router.post('/post', oauth.postTwit)
router.get('/timeline', oauth.timeLine)

module.exports = router;
