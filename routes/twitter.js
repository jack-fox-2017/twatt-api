'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../helpers/twitter')

/* GET users listing. */
router.get('/user', controller.getUserTimeline);

router.get('/', controller.getHomeTimeline)

router.get('/:query', controller.searchTweet)

router.post('/user/:tweet', controller.postTweet)

module.exports = router;
