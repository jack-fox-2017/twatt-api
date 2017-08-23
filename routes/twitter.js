const express = require('express');
const router = express.Router();
const twitterController = require('../controllers/twitterController')

/* GET users listing. */
router.get('/search/:q', twitterController.search)

router.get('/timeline', twitterController.timeline)

router.get('/my-timeline', twitterController.myTimeline)

router.post('/tweet', twitterController.tweet)

module.exports = router;
